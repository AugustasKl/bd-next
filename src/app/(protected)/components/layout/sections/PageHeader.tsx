import React from "react";

interface Props {
  children: React.ReactNode;
  description: string;
  headerTitle: string;
}

export const PageHeader: React.FC<Props> = ({
  description,
  children,
  headerTitle,
}) => {
  return (
    <section className="flex flex-col tablet:flex-col">
      <div className="flex flex-col desktop:flex-row desktop:justify-between desktop:items-center ">
        <div className="mb-4 desktop:mb-0">
          <h1 className="headline1 text-primary-main mb-2">{headerTitle}</h1>
          <p className="text-secondary-main">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
};
