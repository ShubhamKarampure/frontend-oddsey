'use client';

import React, { useState } from 'react';
import { Column, Flex, Text, Card } from "@/once-ui/components";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const ProgressTracker = () => {
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);

  // Sample data - replace with your actual data
  const leetcodeStats = {
    solved: 145,
    totalProblems: 2400,
    easySolved: 70,
    easyTotal: 600,
    mediumSolved: 55,
    mediumTotal: 1300,
    hardSolved: 20,
    hardTotal: 500
  };

  const codeforcesStats = {
    solved: 89,
    rating: 1450,
    contests: 15
  };

  const progressData = [
    { name: 'Easy', solved: (leetcodeStats.easySolved / leetcodeStats.easyTotal) * 100 },
    { name: 'Medium', solved: (leetcodeStats.mediumSolved / leetcodeStats.mediumTotal) * 100 },
    { name: 'Hard', solved: (leetcodeStats.hardSolved / leetcodeStats.hardTotal) * 100 },
  ];

  return (
    <Column gap="l" marginBottom="xl">
      <Flex gap="m" wrap>
        {/* LeetCode Stats */}
        <Card
          className="w-64 cursor-pointer transition-all duration-300 hover:shadow-lg"
          onMouseEnter={() => setHoveredPlatform('leetcode')}
          onMouseLeave={() => setHoveredPlatform(null)}
        >
          <Column padding="m" gap="s">
            <Text variant="heading-strong-l">LeetCode Progress</Text>
            <Text variant="heading-default-xl">
              {leetcodeStats.solved} / {leetcodeStats.totalProblems}
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {((leetcodeStats.solved / leetcodeStats.totalProblems) * 100).toFixed(1)}% Complete
            </Text>
            
            {hoveredPlatform === 'leetcode' && (
              <Column gap="s" marginTop="m">
                <Text variant="body-strong-s">Problem Breakdown</Text>
                <div className="h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={progressData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="solved" fill="#4f46e5" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Column>
            )}
          </Column>
        </Card>

        {/* CodeForces Stats */}
        <Card
          className="w-64 cursor-pointer transition-all duration-300 hover:shadow-lg"
          onMouseEnter={() => setHoveredPlatform('codeforces')}
          onMouseLeave={() => setHoveredPlatform(null)}
        >
          <Column padding="m" gap="s">
            <Text variant="heading-strong-l">CodeForces Progress</Text>
            <Text variant="heading-default-xl">
              {codeforcesStats.solved} Problems
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              Rating: {codeforcesStats.rating}
            </Text>
            
            {hoveredPlatform === 'codeforces' && (
              <Column gap="s" marginTop="m">
                <Text variant="body-strong-s">Contest Performance</Text>
                <Text variant="body-default-m">
                  Participated in {codeforcesStats.contests} contests
                </Text>
                <Text variant="body-default-m">
                  Current Rating: {codeforcesStats.rating}
                </Text>
              </Column>
            )}
          </Column>
        </Card>
      </Flex>
    </Column>
  );
};

export default ProgressTracker;