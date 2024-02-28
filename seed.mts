import { createSeedClient } from "@snaplet/seed";
import { copycat } from "@snaplet/copycat";

// You can use @snaplet/copycat to generate fake data for a field, for example:
// More on this in our docs: https://docs.snaplet.dev/core-concepts/seed#inside-the-snapletseed-workflow

const seed = await createSeedClient({
  dryRun: process.env.DRY !== "0",
});

await seed.$resetDatabase();

// create users

await seed.users((x) =>
  x(1, {
    rawUserMetaData: {
      first_name: "Marco",
      last_name: "Rossi",
      email: "marco.rossi@email.com",
      birth_date: "01/01/2010",
      tax_id: "ABCDEF94E21A944D",
      phone: "3334567890",
    },
  })
);

// Create property buildings
// await seed.propertiesBuildings((x) => x(10));
