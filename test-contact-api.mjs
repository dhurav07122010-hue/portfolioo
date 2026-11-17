async function runTests() {
  const tests = [
    {
      name: "Empty payload",
      payload: {},
      expectedStatus: 400,
    },
    {
      name: "Invalid email",
      payload: {
        fullName: "Test User",
        email: "notanemail",
        phone: "9873111153",
        description: "Testing invalid email input",
      },
      expectedStatus: 400,
    },
    {
      name: "Short description (< 10 chars)",
      payload: {
        fullName: "Test User",
        email: "test@example.com",
        phone: "9873111153",
        description: "short",
      },
      expectedStatus: 400,
    },
    {
      name: "Honeypot filled (bot check)",
      payload: {
        fullName: "Bot User",
        email: "bot@spam.com",
        phone: "9873111153",
        description: "Spam message from automated crawler",
        honeypot: "automated_spam_token",
      },
      expectedStatus: 200,
    },
    {
      name: "Valid submission without server credentials",
      payload: {
        fullName: "Aarav Patel",
        businessName: "Patel Logistics Delhi",
        email: "aarav@example.com",
        phone: "+91 9873111153",
        serviceRequired: "Business Website Development",
        description: "Need a modern responsive web portal for our logistics firm.",
      },
      expectedStatus: 503,
    },
  ];

  console.log("=== CONTACT API AUTOMATED TEST SUITE ===\n");
  let passed = 0;

  for (const t of tests) {
    const res = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(t.payload),
    });
    const json = await res.json().catch(() => ({}));
    const isPass = res.status === t.expectedStatus;
    if (isPass) passed++;

    console.log(
      `${isPass ? "✓ PASS" : "✗ FAIL"}: [${t.name}] Status ${res.status} (Expected ${t.expectedStatus})`
    );
    console.log("   Response:", JSON.stringify(json));
  }

  console.log(`\nResults: ${passed}/${tests.length} tests passed.`);
}

runTests();
