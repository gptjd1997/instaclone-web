import React from "react";
import { Link } from "react-router-dom";

const Tagged = (payload: string) => {
  return payload.split(" ").map((word: string, index: number) =>
    /#[\w]+/g.test(word) ? (
      <Link key={index} to={`/hashtags/${word}`}>
        {word + " "}
      </Link>
    ) : (
      <React.Fragment key={index}>{word + " "}</React.Fragment>
    )
  );
};

export default Tagged;
