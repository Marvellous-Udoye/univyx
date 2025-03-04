import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select, { SingleValue } from "react-select";
import { universities } from "../../../../data/academics/universities";
import FeatureCard from "./FeatureCard";

type SelectOption = { value: string; label: string };

type StatCardProps = {
  value: string;
  label: string;
};

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-primary mb-2">{value}</div>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default function ResourceSection() {
  const [selectedUniversity, setSelectedUniversity] =
    useState<SelectOption | null>(null);
  const navigate = useNavigate();

  const universityOptions: SelectOption[] = universities.map((uni) => ({
    value: uni.id.toString(),
    label: uni.name,
  }));

  const handleSelectChange = (newValue: SingleValue<SelectOption>) => {
    setSelectedUniversity(newValue);
  };

  return (
    <div data-testid="access-resources">
      <div className="max-w-[1120px] w-full mx-auto flex flex-col gap-[50px] py-12 md:py-20 px-6 lg:px-0">
        <div className="flex max-lg:flex-col max-lg:gap-10 items-center justify-between">
          <div className="max-w-2xl w-full">
            <h1 className="text-primary text-4xl md:text-5xl font-semibold mb-3">
              Academic Excellence Hub
            </h1>
            <p className="text-secondary text-lg">
              Access a comprehensive collection of past questions, lecture
              notes, and collaborative study materials shared by students across
              private universities.
            </p>
          </div>

          <div className="flex max-md:flex-col gap-4 md:max-w-[400px] w-full md:justify-end">
            <Select
              options={universityOptions}
              value={selectedUniversity}
              onChange={handleSelectChange}
              className="w-full"
              placeholder="Select University"
              styles={{
                control: (styles) => ({
                  ...styles,
                  paddingTop: 4,
                  paddingBottom: 4,
                }),
              }}
            />
            <button
              disabled={!selectedUniversity}
              onClick={() =>
                selectedUniversity &&
                navigate(`/academics/${selectedUniversity.value}`)
              }
              className="px-6 py-2.5 md:py-2 bg-primary whitespace-nowrap text-white rounded-md disabled:opacity-90 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
              aria-label="Get Notes"
            >
              Get Resources
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          <FeatureCard
            icon={
              <svg
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            }
            title="Comprehensive Study Materials"
            description="Access past questions, lecture notes, and study guides contributed by top-performing students from private universities."
          />
          <FeatureCard
            icon={
              <svg
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"
                />
              </svg>
            }
            title="Collaborative Learning Community"
            description="Connect with peers from your university, join subject-specific study groups, and participate in virtual tutorials led by fellow students."
          />
          <FeatureCard
            icon={
              <svg
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            }
            title="Tech Skills Development"
            description="Access tutorials and resources on emerging technologies, connect with tech mentors, and participate in tech workshops and hackathons."
          />
        </div>

        <div className="bg-gray-100 rounded-2xl p-8 mt-8 grid md:grid-cols-4 gap-8">
          <StatCard value="18+" label="Private Universities" />
          <StatCard value="1K+" label="Academic Resources" />
          <StatCard value="40K+" label="Active Students" />
          <StatCard value="98%" label="Accessibiity" />
        </div>
      </div>
    </div>
  );
}
