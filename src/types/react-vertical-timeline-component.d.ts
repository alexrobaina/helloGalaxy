declare module 'react-vertical-timeline-component' {
  export const VerticalTimeline: React.FC<{
    children: React.ReactNode;
    className?: string;
    layout?: string;
    lineColor?: string;
  }>;

  export const VerticalTimelineElement: React.FC<{
    children: React.ReactNode;
    className?: string;
    contentArrowStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    date?: string;
    dateClassName?: string;
    icon?: React.ReactNode;
    iconClassName?: string;
    iconOnClick?: () => void;
    iconStyle?: React.CSSProperties;
    position?: string;
    style?: React.CSSProperties;
    textClassName?: string;
    visible?: boolean;
  }>;
}
