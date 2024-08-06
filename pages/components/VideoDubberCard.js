import { Card, Image, Text, Button, Badge } from '@mantine/core';

export default function VideoDubberCard() {
  return (
    <Card className="card">
      <Image
        src="/videodubber-thumbnail.jpg"
        alt="VideoDubber Thumbnail"
        className='h-12 w-12 object-contain mx-auto my-4'
      />
      <div className="card-content">
        <Text size="lg" className="card-title">
          VideoDubber - Fast Video Translator
        </Text>
        <Text size="sm" className="card-description">
          Translate videos in your own voice, globalize in a click!
        </Text>
        <div className="btn-container">
          <Button className="btn-upvote">Upvoted 95</Button>
          <Button className="btn-visit">Visit</Button>
        </div>
        <Badge color="green" variant="light" className="card-badge">
          2 months free annually
        </Badge>
          <Badge color="gray">Free Options</Badge>
        <div className="flex flex-wrap gap-2">
          <span color="gray" class = "text-12 font-semibold ">Languages</span>
          <span color="gray">Artificial Intelligence</span>
          <span color="gray">Video</span>
        </div>
      </div>
    </Card>
  );
}
