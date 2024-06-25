import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FaqSection = () => {
  return (
    <div>
      <div className="flex items-center flex-col gap-4 justify-center">
        <h1 className="text-2xl md:text-4xl font-bold">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="flex items-center justify-center w-full mt-10">
        <Accordion type="single" collapsible className="w-[70%]">
          <QuestionAcc
            value="1"
            question="What are credits?"
            response="A credit enables you to download high-resolution cutouts processed by Removal.AI. Therefore, 1 high-quality image download will require you 1 credit. You can use Removal.AI credits via our online tool, our API, by using our background remover app Mac/Windows, or for any future Removal.AI tools."
          />
          <QuestionAcc
            value="2"
            question="What type of images are supported by BGR.AI?"
            response="You can upload any .jpg or .png type of image with up to 12MB size and the images must have a clear subject to get the best background removal output. If the image resolution is larger than 12 megapixels (for example, 6250x5000px), the image is resized to this maximum resolution."
          />
          <QuestionAcc
            value="3"
            question="Can I upgrade/downgrade/cancel my subscriptions?"
            response="Yes, you can, at any time."
          />
          <QuestionAcc
            value="4"
            question="What payment methods do you support?"
            response="We support both Credit Card and Paypal payments."
          />
        </Accordion>
      </div>
    </div>
  );
};

export default FaqSection;

function QuestionAcc({
  question,
  response,
  value,
}: {
  question: string;
  response: string;
  value: string;
}) {
  return (
    <AccordionItem value={value} className="">
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>{response}</AccordionContent>
    </AccordionItem>
  );
}
