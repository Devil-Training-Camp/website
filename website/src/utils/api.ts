export async function fetchCourses() {
  // 这里可以连接到实际的API
  return fetch('/api/courses').then(res => res.json())
}

export async function fetchTeachers() {
  return fetch('/api/teachers').then(res => res.json())
}

export async function submitContactForm(data: any) {
  return fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(res => res.json())
} 