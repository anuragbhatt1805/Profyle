import { ENV } from "../constant.js";

import { createLogger, format, transports } from "winston";

const customFormat = format.printf(({ timestamp, level, message, ...meta }) => {
  // Exclude timestamp and level from meta, stringify remaining meta if any
  const metaString = Object.keys(meta).length ? ` ${JSON.stringify(meta)}` : "";
  return `[${timestamp}] ${level}: ${message}${metaString}`;
});

export const buildLogger = (meta) =>
  createLogger({
    level: ENV === "production" ? "info" : "debug",
    format: format.combine(
      format.timestamp(),
      customFormat
    ),
    defaultMeta: meta,
    transports:
      ENV !== "production"
        ? [
            new transports.Console({
              format: format.combine(
                format.timestamp(),
                format.colorize(),
                customFormat
              ),
            }),
          ]
        : [
            new transports.File({
              filename: "logs/error.log",
              level: "error",
              format: format.combine(format.timestamp(), customFormat),
            }),
            new transports.File({
              filename: "logs/combined.log",
              format: format.combine(format.timestamp(), customFormat),
            }),
          ],
  });
