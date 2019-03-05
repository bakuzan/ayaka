function convertToBase64(
  file: File | Blob,
  callback: (this: FileReader, ev: ProgressEvent) => void
) {
  const reader = new FileReader();
  reader.onloadend = callback;
  reader.readAsDataURL(file);
}

export default convertToBase64;
