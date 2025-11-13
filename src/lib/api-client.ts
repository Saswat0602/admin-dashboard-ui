export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

export async function fetcher<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'An error occurred' }));
    throw new Error(error.message || `HTTP ${response.status}`);
  }

  return response.json();
}

export const apiClient = {
  get: <T>(url: string) => fetcher<T>(url),
  post: <T>(url: string, data: unknown) =>
    fetcher<T>(url, { method: 'POST', body: JSON.stringify(data) }),
  put: <T>(url: string, data: unknown) =>
    fetcher<T>(url, { method: 'PUT', body: JSON.stringify(data) }),
  patch: <T>(url: string, data: unknown) =>
    fetcher<T>(url, { method: 'PATCH', body: JSON.stringify(data) }),
  delete: <T>(url: string) => fetcher<T>(url, { method: 'DELETE' }),
};
