// Configuration for the repeater bot

// Channels whose messages get repeated
const tracked_channels = [
  // Use channel IDs to reference channels. Must be in string format
  // Example: "<channel_id>,"
];

// Channels whose messages get repeated
const output_channels = [
  // Use channel IDs to reference channels. Must be in string format
  // Example: "<channel_id>,"
];

// Custom repeat delay timers which can be defined per channel, in milliseconds
// The default delay is 1000ms or 1 second
const delays = {
  // Example: "channel_id" : delay_in_milliseconds
  default: 1000,
};

export { tracked_channels, output_channels, delays };
