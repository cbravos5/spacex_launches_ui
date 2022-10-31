const baseUrl = import.meta.env.VITE_BASE_URL;

export const urls = {
  nextLaunch: baseUrl + '/next',
  latestLaunch: baseUrl + '/latest',
  upcomingLaunches: baseUrl + '/upcoming',
  previousLaunches: baseUrl + '/past',
}
