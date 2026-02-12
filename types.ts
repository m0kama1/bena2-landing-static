// Added import for React to fix the 'Cannot find namespace React' error
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CaseStudy {
  title: string;
  investment: string;
  result: string;
  included: string[];
}