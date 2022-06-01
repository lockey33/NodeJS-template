import User from "../../models/user.schema";
import databaseInstance from "../../database/connector";

describe("Models testing", () => {
  afterAll(async () => {
    const database = await databaseInstance();
    await database.connection.close();
  });
  test("Instantiate user model without error", async () => {
    let built = false;
    try {
      await User.create({
        name: "Richard",
        commissions: 1000,
      });
      built = true;
    } catch (err) {
      console.log(err);
    }
    expect(built).toEqual(true);
  });
});
