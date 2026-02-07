import Codewars from "./Codewars";
import Monkeytype from "./Monkeytype";
import CodingActive from "./CodingActive";
import Contributions from "./Contributions";
import Leetcode from "./LeetCode";

import Breakline from "@/common/components/elements/Breakline";
import { GITHUB_ACCOUNTS } from "@/common/constants/github";
import { CODEWARS_ACCOUNT } from "@/common/constants/codewars";
import { LEETCODE_ACCOUNT } from "@/common/constants/leetcode";
import Umami from "./Umami";

const Dashboard = () => {
  return (
    <>
      <Umami />
      <Breakline className="my-8" />
      <Contributions endpoint={GITHUB_ACCOUNTS.endpoint} />
      <Breakline className="my-8" />
      <CodingActive />
      <Breakline className="my-8" />
      <Codewars endpoint={CODEWARS_ACCOUNT.endpoint} />
      <Breakline className="my-8" />
      <Leetcode endpoint={LEETCODE_ACCOUNT.endpoint} />
      {/* <Breakline className="my-8" /> */}
      <Monkeytype />
    </>
  );
};

export default Dashboard;
