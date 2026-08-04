function sanatizePath(path) {
  if (path.length > 1) {
    const newPath = path.endsWith("/") ? path.slice(0, -1) : path;
    return newPath;
  } else {
    return path;
  }
}
export {sanatizePath}
