import { FieldErrors, FieldValues } from "react-hook-form"

export const getReadableValidationErrorMessage = (errors) => {
  let validationMessage = ""
  for (const [fieldName, value] of Object.entries(errors)) {
    validationMessage += `${fieldName}:${getErrorMessageFromObjectRecursively(
      value
    )}\n\n`
  }
  return validationMessage.trim()
}

export const getErrorMessageFromObjectRecursively = (temp) => {
  if ("message" in temp) return temp.message
  else {
    let message
    Object.keys(temp).forEach((objKey) => {
      if ("message" in temp[objKey]) message = temp[objKey].message
      else message = getErrorMessageFromObjectRecursively(temp[objKey])
    })
  }
  return message
}
