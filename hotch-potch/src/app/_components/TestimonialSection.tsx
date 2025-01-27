"use client";
import React, { useEffect, useState } from "react";
import TestimonialCard from "./card/TestimonialCard";

interface Testimonial {
  name: string;
  username: string;
  hashtag: string;
  image: string;
  testimonial: string;
}

type TestimonialGroupe = Testimonial[];

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState<TestimonialGroupe[]>([]);

  const indexCheck = (index: number) => {
    if (index === 0) {
      return "";
    } else if (index == 1) {
      return true;
    } else return " hidden lg:block";
  };

  useEffect(() => {
    fetch("/data/testimonialData.json")
      .then((res) => res.json())
      .then((data) => {
        const groupedArray = [];

        for (let i = 0; i < data.length; i += 2) {
          groupedArray.push(data.slice(i, i + 2));
        }
        setTestimonials(groupedArray);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="mb-20">
      <div className="lg:w-1/2 mx-auto text-center space-y-4 lg:space-y-10 py-10 lg:py-20">
        <div className=" px-5 lg:px-20">
          <h2>What our customers say</h2>
          <p
            style={{ fontSize: "18px" }}
            className="text-paragraphColor  lg:tracking-widest mt-4 lg:mt-10"
          >
            Read why thousands of marketers, writers, and entrepreneurs love us
            so much.
          </p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-4">
          {testimonials.map((group: TestimonialGroupe, groupIndex: number) => (
            <>
              <div
                key={groupIndex}
                className={"space-y-4  lg:block " + indexCheck(groupIndex)}
              >
                {group.map((testimonial: Testimonial, index: number) => (
                  <TestimonialCard
                    key={index}
                    name={testimonial.name}
                    username={testimonial.username}
                    image={testimonial.image}
                    hashtag={testimonial.hashtag}
                    testimonial={testimonial.testimonial}
                  />
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
