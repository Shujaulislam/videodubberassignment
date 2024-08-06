import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';

const tailwindClasses = {
    card: 'h-[440px] flex flex-col justify-between items-start bg-cover bg-center',
    title: 'font-greycliff font-extrabold text-white leading-tight text-[32px] mt-2',
    category: 'text-white opacity-70 font-bold uppercase',
  };
  
  function Card({ image, title, category }) {
    return (
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        style={{ backgroundImage: `url(${image})`, width: '392px', height: '220px' }} // Set width and height here
        className={`${tailwindClasses.card} w-[392px] h-[220px]`} // Add Tailwind classes for width and height
      >
        <div>
          <Text className={tailwindClasses.category} size="xs">
            {category}
          </Text>
          <Title order={3} className={tailwindClasses.title}>
            {title}
          </Title>
        </div>
        <Button variant="white" color="dark">
          Read article
        </Button>
      </Paper>
    );
  }

const data = [
  {
    image:
      '',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      '',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    image:
      '',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
  {
    image:
      '',
    title: 'Aurora in Norway: when to visit for best experience',
    category: 'nature',
  },
  {
    image:
      '',
    title: 'Best places to visit this winter',
    category: 'tourism',
  },
  {
    image:
      '',
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
  },
];

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: rem(2), sm: 'xl' }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}
