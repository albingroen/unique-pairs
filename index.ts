const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * (max - 0 + 1) + 0);
};

export const getUniquePairs = (nodes: string[]) => {
  let uniquePairs: Record<string, string | null> = {};
  let success = false;

  const getReceiver = (giver: string): string | null => {
    const availableNodes = nodes.filter(
      (node) => node !== giver && !Object.values(uniquePairs).includes(node)
    );

    return availableNodes[getRandomInt(availableNodes.length - 1)] ?? null;
  };

  while (!success) {
    nodes.forEach((node) => {
      if (!uniquePairs.node) {
        const receiver = getReceiver(node);
        uniquePairs[node] = receiver;
      }
    });

    if (Object.values(uniquePairs).every(Boolean)) {
      success = true;
    } else {
      uniquePairs = {};
    }
  }

  return uniquePairs;
};
