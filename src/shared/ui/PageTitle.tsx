import { Flex, Text } from "@radix-ui/themes";

type PageTitleProps = {
  title: string;
  subtitle: string;
};

export const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <Flex
      direction={"column"}
      gap={"2"}
    >
      <h1 className={"font-bold text-text-primary"}>
        {title}
      </h1>
      <Text className={"page-subtitle text-text-secondary"}>
        {subtitle}
      </Text>
    </Flex>
  );
};
