/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import Navgition from "../islands/Navgition.tsx";

interface University {
  domains: string[];
  web_pages: string[];
  "state-province": string;
  name: string;
  country: string;
  alpha_two_code: string;
}

export default function Greet() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <Navgition></Navgition>
      <div class={tw`my-6`}></div>
      <Counter start={3} />
    </div>
  );
}
