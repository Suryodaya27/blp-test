import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { contactsInfluencer } from '@/lib/db/schema';
import { influencerFormSchema } from '@/components/FormValidation';
import { sendSignupAlert } from '@/lib/discord_alert';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = influencerFormSchema.parse(body);

    const result = await db.insert(contactsInfluencer).values({
      name: validatedData.name,
      location: validatedData.location,
      phone: validatedData.phone,
      category: validatedData.category,
      socialMedia: validatedData.socialMedia,
      email: validatedData.email,
      metadata: { source: 'influencer-form', timestamp: new Date().toISOString() }
    }).returning();

    await sendSignupAlert('Influencer', validatedData.email, validatedData.name);

    return NextResponse.json({ success: true, id: result[0].id });
  } catch (error) {
    console.error('Contact influencer form error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}