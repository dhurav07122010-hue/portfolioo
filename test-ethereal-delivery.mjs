import nodemailer from 'nodemailer';

async function testDelivery() {
  console.log('Generating temporary Ethereal test SMTP credentials...');
  const testAccount = await nodemailer.createTestAccount();

  console.log('Ethereal test account ready:');
  console.log('  SMTP Host:', testAccount.smtp.host);
  console.log('  SMTP Port:', testAccount.smtp.port);

  const transporter = nodemailer.createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const info = await transporter.sendMail({
    from: 'DS Studios <inquiry@dsstudios.in>',
    to: 'ds.studio.buissness@gmail.com',
    replyTo: 'client@example.com',
    subject: 'New Inquiry from Aarav Sharma: Business Website Development',
    text: 'Client Name: Aarav Sharma\nService: Business Website Development\nRequirements: Complete brand portfolio',
    html: '<h3>DS Studios Client Inquiry</h3><p><b>Client:</b> Aarav Sharma</p><p><b>Service:</b> Business Website Development</p>',
  });

  console.log('\n✓ Delivery test completed!');
  console.log('  Message ID:', info.messageId);
  console.log('  Accepted by SMTP server:', info.accepted);
  console.log('  Rejected by SMTP server:', info.rejected);
  console.log('  Ethereal Inbox Verification URL:', nodemailer.getTestMessageUrl(info));
}

testDelivery();
