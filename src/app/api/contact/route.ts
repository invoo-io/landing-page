import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { topic, name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email HTML template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(94.28deg, #257DFF 3.12%, #925AFF 95.84%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Topic:</div>
                <div class="value">${topic || 'Not specified'}</div>
              </div>
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // In a production environment, you would use a service like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Resend
    // - NodeMailer with SMTP

    // For now, we'll log the email and return success
    // In production, replace this with actual email sending logic
    console.log('Email would be sent to: info@invoo.com');
    console.log('From:', email);
    console.log('Subject:', `Contact Form: ${topic || 'General Inquiry'}`);
    console.log('Body:', emailHtml);

    // Example with Resend (uncomment and install @resend/node if using):
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'contact@invoo.com',
      to: 'info@invoo.com',
      subject: `Contact Form: ${topic || 'General Inquiry'}`,
      html: emailHtml,
      reply_to: email,
    });
    */

    // Example with NodeMailer (uncomment and install nodemailer if using):
    /*
    import nodemailer from 'nodemailer';
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'contact@invoo.com',
      to: 'info@invoo.com',
      subject: `Contact Form: ${topic || 'General Inquiry'}`,
      html: emailHtml,
      replyTo: email,
    });
    */

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}