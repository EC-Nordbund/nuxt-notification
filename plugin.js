let hadCheck = false
let allowed = false

const baseOptions = <%=serialize(options.baseOptions)%> // OPTIONS.DEFAULT

function notify(title, options = {}) {
  if (hadCheck === false) {
    getPermission()
  }

  if (!allowed) {
    return
  }

  return new Notification(title, {
    ...baseOptions,
    ...options
  })
}

async function getPermission() {
  if (hadCheck) {
    return
  }

  if (Notification.permission === 'default') {
    await Notification.requestPermission()
  }

  if (Notification.permission === 'granted') {
    allowed = true
  }

  hadCheck = true
}

if(<%=options.requestPermissionImediate%>) {
  getPermission()
}

const notifyPlugin = (_context, inject) => {
  inject('notification', notify)
}

export default notifyPlugin
