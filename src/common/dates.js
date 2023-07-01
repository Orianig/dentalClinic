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
import i18n from '/src/locale'
import { secondsToTime, zeroFill } from '/src/utils/helpers'

const locales = {
	'es-ES': es,
	'en-GB': enGB,
	'it-IT': it,
	'ca-ES': ca,
	'fr-FR': fr,
	'pt-PT': pt,
	'de-DE': de,
	'pl-PL': pl,
	'es-MX': es,
	'nl-NL': nl,
}

export function getLocale(code) {
	return locales[code]
}

function mergeOptions(options = {}) {
	options.locale = {
		...locales[i18n.global.locale],
		formatRelative: token => formatRelativeTokens(i18n.global.locale)[token],
	}

	return options
}

function formatRelativeTokens(locale) {
	const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' })

	return {
		lastWeek: `EEEE`,
		yesterday: `'${rtf.format(-1, 'day')}'`,
		today: `'${rtf.format(0, 'day')}'`,
		tomorrow: `'${rtf.format(1, 'day')}'`,
		other: 'P',
	}
}

function format(date, stringFormat, options = {}) {
	return baseFormat(date, stringFormat, mergeOptions(options))
}

function formatRelative(date, baseDate, options = {}) {
	return baseFormatRelative(date, baseDate, mergeOptions(options))
}

function intlFormatDistance(date, baseDate, options) {
	return baseIntlFormatDistance(date, baseDate, {
		...options,
		style: 'short',
		locale: i18n.global.locale,
	})
}

function milisecondsToTime(s) {
	const ms = s % 1000
	s = (s - ms) / 1000
	const secs = s % 60
	s = (s - secs) / 60
	const mins = s % 60
	const hrs = (s - mins) / 60
	return {
		hours: hrs,
		minutes: mins,
		seconds: secs,
	}
}

// HH:MM   h:m   hh mm   h m  hh m  h mm  mm ss  m s
const formatTime = ({
	seconds = 0,
	minutes = 0,
	hours = 0,
	format = 'HH:MM',
}) => {
	const totalSeconds = Math.round(hours * 60 * 60 + minutes * 60 + seconds)
	const { h, m, s } = secondsToTime(totalSeconds)
	if (!format.includes(':')) {
		return `${zeroFill(h, 2)}h ${zeroFill(m, 2)}min`
	}
	return `${zeroFill(h, 2)}:${zeroFill(m, 2)}`
}

export {
	format,
	formatRelative,
	formatTime,
	intlFormatDistance,
	milisecondsToTime,
	add,
	addDays,
	compareAsc,
	eachDayOfInterval,
	eachMonthOfInterval,
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
}
