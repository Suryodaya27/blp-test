import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { contactsBrand } from '@/lib/db/schema';
import { contactFormSchema } from '@/components/FormValidation';

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		console.log('Received contact brand form data:', body);
		const validatedData = contactFormSchema.parse(body);

		const result = await db.insert(contactsBrand).values({
			...validatedData,
			metadata: { source: 'brand-form', timestamp: new Date().toISOString() }
		}).returning();

		return NextResponse.json({ success: true, id: result[0].id });
	} catch (error) {
		console.error('Contact brand form error:', error);
		return NextResponse.json(
			{ success: false, error: 'Failed to submit form' },
			{ status: 500 }
		);
	}
}