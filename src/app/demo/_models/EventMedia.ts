import { PayloadType, EventMediaType, ImageCrop } from './Enums';

export class EventMedia {
  eventCode!: number;
  contentType!: string;
  type!: EventMediaType;
  url!: string;
  context!: string;
  frameNumber!: number;
  imageCrop!: ImageCrop;
  sizeBytes!: number;
  payloadType!: PayloadType;
  mediaBit: any;
  content!: string;
  media: any;
}
