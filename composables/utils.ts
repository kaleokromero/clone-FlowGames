export const useDateTime = () => {
  const formatDate = (dataISO: string): string => {
    const data = new Date(dataISO)
    const day = data.getDate().toString().padStart(2, '0')
    const month = (data.getMonth() + 1).toString().padStart(2, '0')
    const year = data.getFullYear()
    return `${day}.${month}.${year}`
  }
  const formatHours = (dataISO: string): string => {
    const data = new Date(dataISO)
    const hour = data.getHours().toString().padStart(2, '0')
    const minutes = data.getMinutes().toString().padStart(2, '0')
    return `${hour}:${minutes}`
  }

  return {
    formatDate,
    formatHours,
  }
}