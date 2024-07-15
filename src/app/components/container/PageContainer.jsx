
const PageContainer = ({title, description, children, ...props }) => (
    <div {...props}>
      <title>{title}</title>
      <meta name="description" content={description} />
      {children}

    </div>
);

export default PageContainer;
