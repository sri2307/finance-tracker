import React from 'react';
import { Link } from 'react-router-dom';

interface BreadCrumbsProps {
  title: string;
  breadcrumbs: {
    label: string;
    href: string;
  }[];
}

const Breadcrumbs = ({ title, breadcrumbs }: BreadCrumbsProps) => {
  return (
    <section className="page-header">
      <div className="breadcrumbs">
        <Link to="/dashboard">Home</Link>
        {breadcrumbs.map((item) => (
          <>
            {item.label && <span>&gt;</span>}
            <Link to={item.href}>{item.label}</Link>
          </>
        ))}
      </div>
      <h2>{title}</h2>
    </section>
  );
};

export default Breadcrumbs;
