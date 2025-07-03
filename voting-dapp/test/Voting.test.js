const { expect } = require("chai");

describe("Voting", function () {
  it("Should deploy and allow voting", async function () {
    const Voting = await ethers.getContractFactory("Voting");
    const voting = await Voting.deploy(["A", "B"]);
    await voting.deployed();

    await voting.vote(0);
    const proposals = await voting.getProposals();
    expect(proposals[0].voteCount).to.equal(1);
  });
});
