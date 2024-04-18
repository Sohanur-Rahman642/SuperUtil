module.exports = function formatDateInTimezone(date, timezone) {
  const options = {
    timeZone: timezone,
    timeZoneName: "short",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  return date.toLocaleString("en-US", options);
};
