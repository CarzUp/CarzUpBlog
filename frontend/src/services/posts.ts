export async function getAllBlogPosts(
  status?: string,
  type?: string,
  sort?: string,
  page?: number
) {
  try {
    const queryParams = new URLSearchParams();

    if (status) queryParams.append("status", status);
    if (type) queryParams.append("type", type);
    if (sort) queryParams.append("sort", sort);
    if (page) queryParams.append("page", page.toString());

    const url = `https://blog-api.carzup.world/api/posts?${queryParams.toString()}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store"
    });

    if (!response.ok) {
      console.log(`Error fetching blog posts: ${response.statusText}`);
      return {};
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return null;
  }
}
