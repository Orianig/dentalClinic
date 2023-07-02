import {
	add,
	addDays,
	format as baseFormat,
	formatRelative as baseFormatRelative,
	intlFormatDistance as baseIntlFormatDistance,
	eachDayOfInterval,
	eachMonthOfInterval,
	compareAsc,
	endOfMonth,
	endOfWeek,
	isAfter,
	isBefore,
	isSameDay,
	isSameMonth,
	max,
	min,
	startOfMonth,
	startOfWeek,
} from 'date-fns'
import { es, enGB, it, ca, fr, pt, de, pl, nl } from 'date-fns/locale'


const format = (date, stringFormat) => {
	if (!date) return null
	return baseFormat(date, stringFormat)
};

const formatTime = ({ seconds = 0, minutes = 0, hours = 0, format = 'HH:MM' }) => {
  const totalSeconds = Math.round(hours * 60 * 60 + minutes * 60 + seconds);
  const { h, m, s } = secondsToTime(totalSeconds);
  if (!format.includes(':')) {
    return `${zeroFill(h, 2)}h ${zeroFill(m, 2)}min`;
  }
  return `${zeroFill(h, 2)}:${zeroFill(m, 2)}`;
};

const secondsToTime = (seconds) => {
  const h = Math.floor(seconds / 3600); // Obtener las horas
  const m = Math.floor((seconds % 3600) / 60); // Obtener los minutos
  const s = seconds % 60; // Obtener los segundos
  return {
    h: h,
    m: m,
    s: s,
  };
};

const zeroFill = (number, width) => {
  const numberString = String(number);
  const zerosToAdd = width - numberString.length;
  if (zerosToAdd <= 0) {
    return numberString;
  }
  const zeros = '0'.repeat(zerosToAdd);
  return zeros + numberString;
};

export {
	format,
	formatTime,
	secondsToTime
}
