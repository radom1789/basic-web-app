export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "tracyy"
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "tracyy"
    );
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const getBig = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
  if (getBig) {
    const x: number = parseInt(getBig[1]);
    const y: number = parseInt(getBig[2]);
    const z: number = parseInt(getBig[3]);
    const largest = Math.max(x, y, z); 
    return largest.toString();
  }

  return "";
}
