"use client"
import React, { useState, useEffect } from 'react';
import { Input } from '@/once-ui/components';
import { Icon } from '@/once-ui/components';

import { Card, SmartImage, Text, Row, Column, Line } from '@/once-ui/components';

interface Course {
  id: string;
  title: string;
  difficulty: string;
  timeToComplete: string;
  imageAlt: string;
}

interface Category {
  title: string;
  courses: Course[];
}

const DSAPlatform = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);

  const categories = [
    {
      title: "Popular Algorithms",
      courses: [
        { id: 'binary-search', title: 'Binary Search', difficulty: 'Easy', timeToComplete: '2 hours', imageAlt: 'Binary Search Illustration' },
        { id: 'graphs', title: 'Graph Algorithms', difficulty: 'Medium', timeToComplete: '4 hours', imageAlt: 'Graph Algorithms Illustration' },
        { id: 'dynamic-programming', title: 'Dynamic Programming', difficulty: 'Hard', timeToComplete: '6 hours', imageAlt: 'Dynamic Programming Illustration' },
        { id: 'trees', title: 'Tree Data Structures', difficulty: 'Medium', timeToComplete: '3 hours', imageAlt: 'Tree Data Structures Illustration' },
        { id: 'sorting', title: 'Sorting Algorithms', difficulty: 'Medium', timeToComplete: '3 hours', imageAlt: 'Sorting Algorithms Illustration' }
      ]
    },
    {
      title: "Data Structures",
      courses: [
        { id: 'arrays', title: 'Arrays & Strings', difficulty: 'Easy', timeToComplete: '2 hours', imageAlt: 'Arrays Illustration' },
        { id: 'linked-lists', title: 'Linked Lists', difficulty: 'Easy', timeToComplete: '3 hours', imageAlt: 'Linked Lists Illustration' },
        { id: 'hash-tables', title: 'Hash Tables', difficulty: 'Medium', timeToComplete: '4 hours', imageAlt: 'Hash Tables Illustration' },
        { id: 'heaps', title: 'Heaps', difficulty: 'Medium', timeToComplete: '3 hours', imageAlt: 'Heaps Illustration' }
      ]
    }
  ];

  useEffect(() => {
    const filtered = categories.map(category => ({
      ...category,
      courses: category.courses.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(category => category.courses.length > 0);
    
    setFilteredCategories(filtered);
  }, [searchQuery]);

  return (
    <div className="tw-min-h-screen tw-p-6">
      <div className="tw-max-w-7xl tw-mx-auto">
        <div className="tw-sticky tw-top-0 tw-z-10 tw-pb-4">
            <div className="tw-relative">
            <Input id="search" label="Search courses..." value={searchQuery} hasPrefix={<Icon name="search" />} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
        </div>

        {filteredCategories.map((category, index) => (
          <div key={index} className="tw-mb-12">
            <h2 className="tw-text-white tw-text-2xl tw-font-semibold tw-mb-4">{category.title}</h2>
            <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-4">
              {category.courses.map(course => (
                <Card key={course.id} maxWidth={24} radius="l-4" direction="column" onClick={() => window.location.href = `/learn/${course.id}`}>
                  <SmartImage sizes="640px" fillWidth aspectRatio="4 / 3" radius="l" src={`/images/courses/${course.id}.gif`} alt={course.imageAlt} />
                  <Column fillWidth paddingX="20" paddingY="24" gap="8">
                    <Text variant="body-default-xl">{course.title}</Text>
                    <Text onBackground="neutral-weak" variant="body-default-s">{course.difficulty} - {course.timeToComplete}</Text>
                  </Column>
                  <Line background="neutral-alpha-medium" />
                  
                </Card>
              ))}
            </div>
          </div>
        ))}

        {filteredCategories.length === 0 && (
          <div className="tw-text-center tw-text-gray-400 tw-mt-8">
            No courses found matching "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
};

export default DSAPlatform;
