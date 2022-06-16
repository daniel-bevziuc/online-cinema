export const convertMongoDate = (date: string) => {
	return new Date(date).toLocaleDateString('gb')
}
