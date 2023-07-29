import dayjs from 'dayjs'

export const dateTimeFormatter = (datetime: string) => dayjs(datetime).format('LLL')
