// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

const sampleData = { upvotes: 132, downvotes: 132 };

const getVoteCount = (data) => {
  return data.upvotes - data.downvotes;
};

console.log(getVoteCount(sampleData));
