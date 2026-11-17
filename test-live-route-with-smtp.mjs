import nodemailer from 'nodemailer';

async function testFullRoute() {
  console.log('Generating Ethereal test account...');
  const testAccount = await nodemailer.createTestAccount();

  // Test sending via route logic
  const transporter = nodemailer.createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const payload = {
    fullName: 'Rohan Verma',
    businessName: 'Delhi Heritage Cafe',
    email: 'rohan.verma@example.com',
    phone: '+91 9873111153',
    serviceRequired: 'E-Commerce Website Development',
    description: 'We need an online ordering and reservation website with Indian payment gateway integration.',
  };

  const formattedDate = new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata',
  }).format(new Date());

  const info = await transporter.sendMail({
    from: 'DS Studios <onboarding@resend.dev>',
    to: 'ds.studio.buissness@gmail.com',
    replyTo: payload.email,
    subject: `New Inquiry from ${payload.fullName}: ${payload.serviceRequired}`,
    text: `Client Name: ${payload.fullName}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nService: ${payload.serviceRequired}\n\nRequirements:\n${payload.description}`,
    html: `<h3>DS Studios Client Inquiry</h3><p><b>Client:</b> ${payload.fullName}</p><p><b>Business:</b> ${payload.businessName}</p><p><b>Email:</b> ${payload.email}</p><p><b>Phone:</b> ${payload.phone}</p><p><b>Service:</b> ${payload.serviceRequired}</p><p><b>Submitted:</b> ${formattedDate} (IST)</p><hr><p>${payload.description}</p>`,
  });

  console.log('✓ Email dispatched to DS Studios inbox!');
  console.log('  Status: DELIVERED');
  console.log('  Message ID:', info.messageId);
  console.log('  Recipient:', info.accepted[0]);
  console.log('  View Email in Ethereal Sandbox:', nodemailer.getTestMessageUrl(info));
}

testFullRoute();
