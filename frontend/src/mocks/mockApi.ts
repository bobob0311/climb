const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === 'true';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
type QueryParams = Record<string, unknown>;

const nowIsoHour = () => {
  const now = new Date();
  now.setMinutes(0, 0, 0);
  return now.toISOString().slice(0, 19);
};

const mountainCards = [
  {
    mountainId: 1,
    mountainName: '북한산',
    mountainImageUrl: '/images/mountain1_layer1.webp',
    mountainDescription: '도심에서 접근하기 좋은 대표 산',
    weatherMetric: {
      precipitationType: 'NONE',
      sky: 'SUNNY',
      surfaceTemperature: 19,
      topTemperature: 15,
    },
  },
  {
    mountainId: 2,
    mountainName: '설악산',
    mountainImageUrl: '/images/mountain2_layer1.webp',
    mountainDescription: '능선 경관이 뛰어난 고산 지형',
    weatherMetric: {
      precipitationType: 'NONE',
      sky: 'CLOUDY',
      surfaceTemperature: 17,
      topTemperature: 12,
    },
  },
];

const reportKeywords = {
  weather: [{ id: 1, name: '맑음' }, { id: 2, name: '흐림' }, { id: 3, name: '안개' }],
  rain: [{ id: 4, name: '약한 비' }, { id: 5, name: '강한 비' }],
  etcetera: [{ id: 6, name: '미끄러움' }, { id: 7, name: '낙석 주의' }],
};

const reportCards = Array.from({ length: 12 }, (_, index) => ({
  reportId: index + 1,
  reportType: index % 2 === 0 ? 'WEATHER' : 'SAFE',
  createdAt: new Date(Date.now() - index * 1000 * 60 * 35).toISOString(),
  nickname: 'mock-user',
  userImageUrl: '',
  imageUrl: '',
  content: `목 데이터 제보 ${index + 1}`,
  likeCount: 2 + index,
  isLiked: false,
  weatherKeywords: ['맑음'],
  rainKeywords: ['약한 비'],
  etceteraKeywords: ['미끄러움'],
}));

const courseForecast = {
  courseAltitude: 850,
  recommendComment: '목 데이터: 산행하기 좋은 조건입니다.',
  adjustedRecommendComment: '목 데이터: 정상부는 바람이 강할 수 있어요.',
  startCard: {
    dateTime: nowIsoHour(),
    hikingActivity: '좋음',
    temperature: 18,
    apparentTemperature: 17,
    temperatureDescription: '선선합니다.',
    precipitation: '0',
    probabilityDescription: '강수 가능성 낮음',
    precipitationType: 'NONE',
    sky: 'SUNNY',
    skyDescription: '맑음',
    windSpeed: 1.4,
    windSpeedDescription: '약한 바람',
    humidity: 52,
    humidityDescription: '쾌적함',
    highestTemperature: 22,
    lowestTemperature: 14,
  },
  arrivalCard: {
    dateTime: nowIsoHour(),
    hikingActivity: '좋음',
    temperature: 15,
    apparentTemperature: 14,
    temperatureDescription: '서늘합니다.',
    precipitation: '0',
    probabilityDescription: '강수 가능성 낮음',
    precipitationType: 'NONE',
    sky: 'CLOUDY',
    skyDescription: '구름 많음',
    windSpeed: 2.3,
    windSpeedDescription: '약간 강한 바람',
    humidity: 58,
    humidityDescription: '적정 습도',
    highestTemperature: 20,
    lowestTemperature: 12,
  },
  adjustedArrivalCard: {
    dateTime: nowIsoHour(),
    hikingActivity: '약간 나쁨',
    temperature: 13,
    apparentTemperature: 11,
    temperatureDescription: '체감은 더 낮아요.',
    precipitation: '0',
    probabilityDescription: '강수 가능성 낮음',
    precipitationType: 'NONE',
    sky: 'CLOUDY',
    skyDescription: '흐림',
    windSpeed: 4.2,
    windSpeedDescription: '강한 바람',
    humidity: 60,
    humidityDescription: '보통',
    highestTemperature: 18,
    lowestTemperature: 10,
  },
  descentCard: {
    dateTime: nowIsoHour(),
    hikingActivity: '좋음',
    temperature: 17,
    apparentTemperature: 16,
    temperatureDescription: '쾌적합니다.',
    precipitation: '0',
    probabilityDescription: '강수 가능성 낮음',
    precipitationType: 'NONE',
    sky: 'SUNNY',
    skyDescription: '맑음',
    windSpeed: 1.8,
    windSpeedDescription: '약한 바람',
    humidity: 54,
    humidityDescription: '적정 습도',
    highestTemperature: 21,
    lowestTemperature: 13,
  },
};

function paginateByLastId<T extends { reportId: number }>(items: T[], pageSize: number, lastId?: number) {
  const sorted = [...items].sort((a, b) => b.reportId - a.reportId);
  const filtered = typeof lastId === 'number' ? sorted.filter((item) => item.reportId < lastId) : sorted;
  return filtered.slice(0, pageSize);
}

export function shouldUseMockData() {
  return USE_MOCK_DATA;
}

export function getMockResponse(url: string, method: HttpMethod, params: QueryParams = {}): unknown {
  if (url === '/card/mountain' && method === 'GET') return mountainCards;
  if (url.startsWith('/card/mountain/') && url.endsWith('/course')) return [{ courseId: 101, courseName: '백운대 코스' }, { courseId: 102, courseName: '숨은벽 코스' }];
  if (url.startsWith('/card/mountain/') && url.endsWith('/forecast')) {
    return Array.from({ length: 14 }, (_, hour) => ({
      dateTime: new Date(Date.now() + hour * 3600000).toISOString(),
      temperature: 15 + (hour % 7),
      precipitationType: 'NONE',
      sky: hour % 4 === 0 ? 'CLOUDY' : 'SUNNY',
    }));
  }
  if (url.startsWith('/card/course/') && url.endsWith('/forecast')) return courseForecast;

  if (url.startsWith('/card/mountain/course/') && !url.endsWith('/schedule') && method === 'GET') {
    return {
      courseImageUrl: '/images/mountain1_layer2.webp',
      duration: 3.4, distance: 6.2, sunrise: '05:40:00', sunset: '19:10:00',
      hikingActivityStatus: '좋음', mountainName: '북한산', courseName: '백운대 코스',
      date: '2026-01-01', startTime: '07:00:00',
    };
  }

  if (url.startsWith('/card/mountain/course/') && url.endsWith('/schedule')) {
    return {
      date: '2026-01-01', startTime: '07:00:00', descentTime: '11:00:00',
      mountainName: '북한산', courseName: '백운대 코스', distance: 6.2,
      startForecast: { temperature: 15, windSpeed: 1.8, apparentTemperature: 14, precipitationProbability: 10, sky: '맑음', humidity: 58 },
      arrivalForecast: { temperature: 13, windSpeed: 2.6, apparentTemperature: 11, precipitationProbability: 20, sky: '구름 많음', humidity: 64 },
      descentForecast: { temperature: 16, windSpeed: 1.9, apparentTemperature: 15, precipitationProbability: 10, sky: '맑음', humidity: 60 },
      highestTemperature: 18, lowestTemperature: 12, hikingActivityStatus: '좋음',
    };
  }

  if (url === '/card/interaction/keyword') return reportKeywords;
  if (url.startsWith('/card/interaction/report/me')) {
    const pageSize = Number(params.pageSize ?? 5);
    const lastId = typeof params.lastId === 'number' ? params.lastId : undefined;
    return paginateByLastId(reportCards, pageSize, lastId);
  }
  if (url.startsWith('/card/interaction/report/')) {
    const pageSize = Number(params.pageSize ?? 5);
    const lastId = typeof params.lastId === 'number' ? params.lastId : undefined;
    return paginateByLastId(reportCards, pageSize, lastId);
  }

  if (url === '/user' && method === 'GET') return { nickname: 'mock-user', loginId: 'mock-id', imageUrl: '' };
  if (url === '/user/sign-in' && method === 'POST') return { value: 'mock-access-token' };
  if (url === '/user/sign-up' && method === 'POST') return '회원가입 되셨습니다.';
  if (url === '/user/nickname' && method === 'PATCH') return '';
  if (url.startsWith('/card/interaction/report/like/') && method === 'POST') return '';
  if (url === '/card/interaction/report' && method === 'POST') return '';
  if (url === '/user/image' && method === 'PATCH') return '';

  return null;
}
