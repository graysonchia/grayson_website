export const projects = [
  {
    id: 'mediops',
    title: 'MediOps',
    domain: 'Healthcare',
    emoji: 'MO',
    image: '',
    imageAlt: 'MediOps hospital operations dashboard preview',
    tagline: 'Real-Time Hospital Operations Analytics',
    tags: ['FastAPI', 'React', 'PostgreSQL', 'Celery', 'Redis', 'WebSockets', 'scikit-learn'],
    category: 'Healthcare Analytics - Operations Intelligence',
    summary:
      'A real-time hospital operations command dashboard for Malaysian healthcare networks, combining live telemetry, anomaly alerts, ML predictions, and interactive analytics.',
    problem:
      'Hospital operations teams need fast visibility into bed occupancy, ER wait times, staffing, equipment uptime, and unresolved anomalies across multiple facilities.',
    dataset:
      'Synthetic operational data for five Malaysian hospitals, including departments, bed occupancy readings, staff records, equipment readings, patient records, and anomaly alerts.',
    tools: [
      'FastAPI',
      'SQLAlchemy',
      'PostgreSQL',
      'Redis',
      'Celery',
      'pandas',
      'scikit-learn',
      'React',
      'TanStack Query',
      'Recharts',
    ],
    methodology: [
      'Designed a multi-hospital operational data model with seeded healthcare network data',
      'Built async FastAPI endpoints for beds, staff, equipment, patients, predictions, anomalies, and analytics',
      'Added Redis Pub/Sub and WebSockets for live anomaly events',
      'Used Celery workers and Celery Beat for data simulation, anomaly checks, and model retraining',
      'Trained Random Forest and Gradient Boosting models for length-of-stay and ER wait predictions',
      'Applied Isolation Forest for operational anomaly detection and KMeans for shift clustering',
      'Built a React dashboard with live ops, patient flow, predictions, anomalies, and shift analytics views',
    ],
    insights: [
      'Tracks five Malaysian hospitals with department capacity, occupancy, staffing, and equipment indicators',
      'Generates confidence-bounded predictions for length of stay and ER wait time',
      'Surfaces unresolved operational alerts with severity classification and resolution workflows',
      'Clusters shifts to compare operational patterns and hospital efficiency',
    ],
    outcome:
      'A production-style healthcare analytics system demonstrating real-time data pipelines, background processing, ML services, and clinical operations dashboards.',
    skills: ['Healthcare analytics', 'Real-time dashboards', 'WebSockets', 'Background workers', 'Predictive modelling'],
    learned:
      'This project strengthened my ability to connect operational metrics, live system design, and machine-learning outputs into a dashboard users can act on quickly.',
    github: 'https://github.com/graysonchia/MediOps',
    demo: '',
  },
  {
    id: 'transitpulse',
    title: 'TransitPulse',
    domain: 'Transportation',
    emoji: 'TP',
    image: '/projects/transitpulse/card-preview.png',
    imageAlt: 'TransitPulse public transport dashboard overview preview',
    gallery: [
      {
        src: '/projects/transitpulse/overview-full.png',
        alt: 'TransitPulse full overview dashboard',
        title: 'Overview Dashboard',
        description:
          'High-level Klang Valley transit metrics, anomaly summaries, route counts, and operational health indicators.',
      },
      {
        src: '/projects/transitpulse/routes.png',
        alt: 'TransitPulse route analytics dashboard',
        title: 'Route Analytics',
        description: 'Route-level patterns and service metrics used to compare performance across the transit network.',
      },
      {
        src: '/projects/transitpulse/forecast.png',
        alt: 'TransitPulse forecast dashboard',
        title: 'Forecast View',
        description: 'Predicted route performance and demand signals for planning and operational review.',
      },
      {
        src: '/projects/transitpulse/anomalies.png',
        alt: 'TransitPulse anomaly detection dashboard',
        title: 'Anomaly Detection',
        description: 'Flagged route anomalies and unusual transit patterns surfaced for faster investigation.',
      },
    ],
    tagline: 'Klang Valley Public Transport Analytics',
    tags: ['Python', 'FastAPI', 'React', 'IsolationForest', 'GTFS Data', 'PostgreSQL'],
    category: 'Data Analytics - Anomaly Detection',
    summary:
      'A full-stack analytics platform that ingests real GTFS data from api.data.gov.my to detect route anomalies, visualize transit patterns, and surface operational insights for the Klang Valley public transport network.',
    problem:
      'Public transit data in Malaysia is available but rarely analyzed in a meaningful way. Without anomaly detection or pattern analysis, service disruptions and underperforming routes can go unnoticed.',
    dataset:
      'Real GTFS feed from api.data.gov.my, including stops, routes, trips, stop times, and calendar data. Over 800,000 records processed.',
    tools: ['pandas', 'numpy', 'scikit-learn', 'FastAPI', 'PostgreSQL', 'React', 'Recharts'],
    methodology: [
      'Ingested and parsed GTFS feed data from the Malaysian open data portal',
      'Cleaned and normalized multi-table transit data',
      'Applied IsolationForest to flag anomalous routes',
      'Built RandomForest classifier for route performance categories',
      'Used K-Means to cluster stops by usage patterns and density',
      'Developed FastAPI backend with async PostgreSQL queries',
      'Built React dashboard with interactive maps and anomaly alerts',
    ],
    insights: [
      'Identified 23 routes with statistically anomalous departure patterns',
      'Clustered stops into 5 usage groups, revealing underserved suburban areas',
      'Peak anomaly hours concentrated around rush hours',
      'Route classification model achieved 94.3% accuracy',
    ],
    outcome:
      'A functional analytics dashboard with real Malaysian data, demonstrating data engineering, ML pipelines, and interactive visualization.',
    skills: ['Data ingestion', 'Anomaly detection', 'Classification', 'Clustering', 'Visualization'],
    learned:
      'Working with messy real-world data taught me that cleaning and validation shape the quality of every model downstream.',
    github: 'https://github.com/graysonchia/TransitPulse',
    demo: '',
  },
  {
    id: 'pricewatch',
    title: 'PriceWatch MY',
    domain: 'E-Commerce',
    emoji: 'PW',
    image: '/projects/pricewatch/card-preview.png',
    imageAlt: 'PriceWatch MY price intelligence dashboard overview preview',
    gallery: [
      {
        src: '/projects/pricewatch/overview-full.png',
        alt: 'PriceWatch MY full overview dashboard',
        title: 'Overview Dashboard',
        description:
          'Portfolio-level price intelligence with tracked products, price changes, anomalies, and forecasting indicators.',
      },
      {
        src: '/projects/pricewatch/deals.png',
        alt: 'PriceWatch MY deals dashboard',
        title: 'Deals & Alerts',
        description: 'Detected price drops, anomalous spikes, and product opportunities for shopper or retailer review.',
      },
      {
        src: '/projects/pricewatch/trends.png',
        alt: 'PriceWatch MY price trends dashboard',
        title: 'Price Trends',
        description: 'Category and product price movement over time with trend visualisations and forecast context.',
      },
      {
        src: '/projects/pricewatch/categories.png',
        alt: 'PriceWatch MY category insights dashboard',
        title: 'Category Insights',
        description: 'Segmented category performance and pricing behaviour for Malaysian e-commerce products.',
      },
    ],
    tagline: 'Malaysian E-Commerce Price Intelligence Platform',
    tags: ['Python', 'FastAPI', 'React', 'GradientBoosting', 'IsolationForest', 'APScheduler'],
    category: 'Data Analytics - Price Forecasting',
    summary:
      'A price tracking platform for Malaysian e-commerce that monitors product prices, detects anomalous price changes, segments products, and forecasts future prices.',
    problem:
      'Malaysian shoppers and small retailers need a systematic way to track price trends, detect suspicious spikes, and forecast upcoming price movements.',
    dataset:
      'Scraped and synthetic e-commerce price data with 12,500+ records across product categories and time periods.',
    tools: ['pandas', 'scikit-learn', 'FastAPI', 'PostgreSQL', 'APScheduler', 'React', 'Recharts'],
    methodology: [
      'Built APScheduler pipeline to collect and store product prices',
      'Applied IsolationForest to detect price spikes',
      'Used K-Means to segment products into pricing tiers',
      'Trained GradientBoostingRegressor for 7-day price forecasts',
      'Developed an ML insights dashboard with anomaly timelines and forecast charts',
    ],
    insights: [
      '156 anomalous price events detected around festive and sale periods',
      'K-Means identified 4 pricing segments with different volatility profiles',
      'Forecasting model achieved 4.2% RMSE on a 30-day holdout set',
      'Electronics showed the highest price volatility',
    ],
    outcome:
      'An end-to-end price intelligence system with scheduled data collection, ML detection, and forecast-powered insights.',
    skills: ['Forecasting', 'Anomaly detection', 'Clustering', 'Scheduled pipelines', 'Business insights'],
    learned:
      'This project sharpened my ability to translate technical model output into business questions users actually care about.',
    github: 'https://github.com/graysonchia/PriceWatch-MY',
    demo: '',
  },
  {
    id: 'habitflow',
    title: 'HabitFlow',
    domain: 'Healthcare',
    emoji: 'HF',
    image: '/projects/habitflow-dashboard.png',
    imageAlt: 'HabitFlow habit and mood analytics app preview',
    tagline: 'Habit & Mood Analytics Platform',
    tags: ['Python', 'FastAPI', 'Expo React Native', 'K-Means', 'Logistic Regression'],
    category: 'Behavioural Analytics - ML Classification',
    summary:
      'A mobile-first habit and mood tracker with an analytics engine that clusters users by behaviour and predicts habit dropout risk.',
    problem:
      'Most habit tracking apps show what users did, but not why they are likely to quit. HabitFlow turns raw logs into behavioural insight.',
    dataset:
      'Synthetic habit logs and mood entries for 500 simulated users over a 90-day horizon.',
    tools: ['pandas', 'scikit-learn', 'FastAPI', 'PostgreSQL', 'Expo React Native', 'Recharts'],
    methodology: [
      'Designed schema for habits, mood logs, and streaks',
      'Extracted behavioural features such as streak length and completion rate',
      'Applied K-Means to cluster users by engagement style',
      'Trained Logistic Regression to predict 30-day dropout risk',
      'Built analytics endpoints and a mobile insights screen',
    ],
    insights: [
      '4 user clusters identified: Consistent Achievers, Weekend Warriors, Mood-Driven Users, and At-Risk Disengaged',
      'At-Risk cluster represented 18.4% of users',
      'Morning habit completions correlated with higher mood scores',
      'Logistic Regression achieved 83% accuracy',
    ],
    outcome:
      'A full-stack mobile analytics platform demonstrating segmentation, churn prediction, and personalized insight delivery.',
    skills: ['Behavioural analytics', 'Clustering', 'Classification', 'Mobile development', 'Feature engineering'],
    learned:
      'The most useful ML output is the one a user can understand and act on without needing to inspect a model.',
    github: 'https://github.com/graysonchia/HabitFlow',
    demo: '',
  },
  {
    id: 'fitlog',
    title: 'FitLog Pro',
    domain: 'Healthcare',
    emoji: 'FL',
    image: '/projects/fitlog/card-preview.png',
    imageAlt: 'FitLog Pro dashboard overview preview',
    gallery: [
      {
        src: '/projects/fitlog/overview-full.png',
        alt: 'FitLog Pro full overview dashboard',
        title: 'Overview Dashboard',
        description:
          'High-level fitness metrics including users, sessions, calories, goals, churn risk, and cluster counts.',
      },
    ],
    tagline: 'Fitness Tracking with ML-Powered Insights',
    tags: ['Python', 'FastAPI', 'React', 'RandomForest', 'K-Means', 'Linear Regression'],
    category: 'Health Analytics - Predictive Modelling',
    summary:
      'A 12-table fitness tracking platform with a web dashboard and ML layer for churn prediction, fitness clustering, and performance forecasting.',
    problem:
      'Fitness apps generate large volumes of data but rarely help users understand progress or identify disengagement risk.',
    dataset:
      'Synthetic fitness data across 12 relational tables, including workouts, sets, reps, body metrics, goals, streaks, and profiles.',
    tools: ['pandas', 'scikit-learn', 'FastAPI', 'PostgreSQL', 'React', 'Expo React Native', 'Recharts'],
    methodology: [
      'Designed and seeded a 12-table PostgreSQL schema',
      'Trained RandomForest classifier to predict 30-day churn',
      'Applied K-Means to segment users into fitness archetypes',
      'Built Linear Regression forecasting for PR trajectories',
      'Created React insights page with risk scores and forecast charts',
    ],
    insights: [
      'Churn model achieved 87% accuracy',
      '4 fitness archetypes identified across simulated users',
      'Consistent users tended to plateau around week 12',
      'Weekend-only users had higher churn probability',
    ],
    outcome:
      'A production-style fitness analytics platform from relational data modelling through ML integration and dashboard delivery.',
    skills: ['Churn prediction', 'Segmentation', 'Forecasting', 'Full-stack development', 'Relational modelling'],
    learned:
      'Careful schema design matters before ML begins, because data relationships shape every downstream feature.',
    github: 'https://github.com/graysonchia/FitLog-Pro',
    demo: '',
  },
  {
    id: 'wellanalytics',
    title: 'Well Performance Prediction Optimization',
    domain: 'Oil & Gas',
    emoji: 'WA',
    image: '',
    imageAlt: 'Well Performance Prediction Optimization oil and gas analytics dashboard preview',
    tagline: 'Oil & Gas Well Performance Prediction',
    tags: ['Python', 'FastAPI', 'React', 'Prophet', 'IsolationForest', 'K-Means'],
    category: 'Industrial Analytics - Time-Series Forecasting',
    summary:
      'A domain-specific analytics platform for monitoring well sensor readings, detecting equipment anomalies, and forecasting production.',
    problem:
      'Unexpected equipment failures and declining well performance are expensive. Predictive analytics moves maintenance from reactive to proactive.',
    dataset:
      'Synthetic sensor readings and production logs for 20 wells over a 12-month simulated horizon.',
    tools: ['pandas', 'scikit-learn', 'Prophet', 'FastAPI', 'PostgreSQL', 'React', 'Recharts'],
    methodology: [
      'Simulated realistic well sensor and production data',
      'Applied IsolationForest to sensor readings',
      'Clustered wells by performance profile',
      'Trained Prophet models per well for production forecasts',
      'Built React dashboard with timelines, anomaly feeds, and forecasts',
    ],
    insights: [
      '47 sensor anomaly events flagged across 20 wells',
      '3 well clusters identified: underperforming, stable, and high-output',
      'High-output wells showed seasonal Q3 production dips',
      'Prophet forecasts achieved 6.8% MAPE',
    ],
    outcome:
      'A domain-adapted analytics product showing that data and ML skills transfer across industries.',
    skills: ['Time-series forecasting', 'Anomaly detection', 'Industrial analytics', 'Prophet modelling'],
    learned:
      'This project taught me to research unfamiliar domains and map business risk to the right analytics methods.',
    github: 'https://github.com/graysonchia/WellAnalytics',
    demo: '',
  },
  {
    id: 'cineintel',
    title: 'CineIntel',
    domain: 'Business Analytics',
    emoji: 'CI',
    image: '',
    imageAlt: 'CineIntel movie analytics dashboard preview',
    tagline: 'Movie Intelligence & Audience Analytics',
    tags: ['Python', 'Data Analytics', 'Visualization', 'Dashboard', 'Machine Learning'],
    category: 'Entertainment Analytics - Movie Intelligence',
    summary:
      'A movie analytics project focused on exploring film performance, audience trends, and data-driven entertainment insights.',
    problem:
      'Movie data contains useful signals about audience preference, revenue patterns, and genre performance, but those signals are difficult to compare without structured analytics.',
    dataset:
      'Movie and entertainment data prepared for exploratory analysis, trend comparison, and dashboard-style reporting.',
    tools: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'Seaborn'],
    methodology: [
      'Prepared movie records for analysis and comparison',
      'Explored relationships between genres, ratings, popularity, and performance indicators',
      'Built visual summaries to make entertainment trends easier to interpret',
      'Organized findings into a project format suitable for portfolio review',
    ],
    insights: [
      'Highlights patterns across movie categories and audience response',
      'Supports comparison between performance indicators',
      'Turns raw entertainment data into clearer analytical findings',
    ],
    outcome:
      'A portfolio analytics project showing how Python-based analysis can turn entertainment data into practical insight.',
    skills: ['Exploratory data analysis', 'Visualization', 'Storytelling with data', 'Feature analysis'],
    learned:
      'This project strengthened my ability to frame consumer data as a set of clear questions and visual findings.',
    github: 'https://github.com/graysonchia/CineIntel',
    demo: '',
  },
  {
    id: 'fxpulse-my',
    title: 'FXPulse MY',
    domain: 'Finance',
    emoji: 'FX',
    image: '',
    imageAlt: 'FXPulse MY foreign exchange analytics dashboard preview',
    tagline: 'Malaysia Foreign Exchange Analytics',
    tags: ['Python', 'Finance Analytics', 'Time Series', 'Dashboard', 'Forecasting'],
    category: 'Finance Analytics - Foreign Exchange',
    summary:
      'A foreign exchange analytics project for monitoring currency movement, trend patterns, and financial market signals relevant to Malaysia.',
    problem:
      'Currency movement affects businesses, travellers, and financial planning, but exchange-rate data needs clear visualisation before trends become actionable.',
    dataset:
      'Foreign exchange time-series data prepared for trend analysis, comparison, and dashboard reporting.',
    tools: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'Seaborn'],
    methodology: [
      'Collected and prepared currency-rate records for analysis',
      'Compared exchange-rate movement over time',
      'Built visual indicators for trend direction and volatility',
      'Summarised financial signals in a dashboard-oriented format',
    ],
    insights: [
      'Shows how exchange-rate movement changes across time windows',
      'Supports clearer comparison of currency volatility',
      'Connects financial data preparation with practical reporting',
    ],
    outcome:
      'A finance analytics project demonstrating time-series preparation, visual analysis, and market-focused reporting.',
    skills: ['Time-series analysis', 'Financial analytics', 'Visualization', 'Trend analysis'],
    learned:
      'This project helped me practise turning changing financial data into concise indicators and visual summaries.',
    github: 'https://github.com/graysonchia/FXPulse-MY',
    demo: '',
  },
  {
    id: 'sentimentpulse-my',
    title: 'SentimentPulse MY',
    domain: 'Business Analytics',
    emoji: 'SP',
    image: '',
    imageAlt: 'SentimentPulse MY sentiment analytics dashboard preview',
    tagline: 'Malaysian Sentiment Analytics',
    tags: ['Python', 'NLP', 'Sentiment Analysis', 'Text Analytics', 'Dashboard'],
    category: 'Text Analytics - Sentiment Analysis',
    summary:
      'A sentiment analytics project that analyses text data to surface public opinion patterns and sentiment trends.',
    problem:
      'Large volumes of text feedback are hard to review manually, especially when the goal is to understand shifts in public sentiment over time.',
    dataset:
      'Text-based records prepared for sentiment scoring, keyword analysis, and visual reporting.',
    tools: ['Python', 'pandas', 'NLTK', 'scikit-learn', 'Matplotlib', 'Seaborn'],
    methodology: [
      'Prepared text records for sentiment analysis',
      'Cleaned and transformed text into analysis-ready features',
      'Applied sentiment scoring and category summaries',
      'Visualised sentiment distribution and trend patterns',
    ],
    insights: [
      'Summarises positive, neutral, and negative sentiment patterns',
      'Helps identify themes in text-based feedback',
      'Demonstrates practical NLP workflow design',
    ],
    outcome:
      'A text analytics project showing how NLP methods can make public feedback easier to understand and communicate.',
    skills: ['NLP', 'Text preprocessing', 'Sentiment analysis', 'Data visualization'],
    learned:
      'This project strengthened my understanding of how text cleaning choices affect the quality of sentiment results.',
    github: 'https://github.com/graysonchia/SentimentPulse-MY',
    demo: '',
  },
  {
    id: 'threatlens',
    title: 'ThreatLens',
    domain: 'Security & Risk',
    emoji: 'TL',
    image: '',
    imageAlt: 'ThreatLens cybersecurity analytics dashboard preview',
    tagline: 'Cybersecurity Threat Analytics',
    tags: ['Python', 'Cybersecurity', 'Anomaly Detection', 'Risk Analytics', 'Dashboard'],
    category: 'Security Analytics - Threat Detection',
    summary:
      'A cybersecurity analytics project focused on identifying suspicious patterns, risk signals, and threat indicators from security-related data.',
    problem:
      'Security events can be noisy and difficult to prioritise without analytics that highlight suspicious activity and risk patterns.',
    dataset:
      'Security-style event data prepared for risk scoring, anomaly review, and visual threat reporting.',
    tools: ['Python', 'pandas', 'scikit-learn', 'Matplotlib', 'Seaborn'],
    methodology: [
      'Prepared security event records for analysis',
      'Explored suspicious activity patterns and risk indicators',
      'Applied anomaly-oriented analysis to identify unusual behaviour',
      'Presented findings through visual summaries',
    ],
    insights: [
      'Highlights unusual activity patterns in event data',
      'Supports risk-based review of security records',
      'Connects analytics methods with cybersecurity decision-making',
    ],
    outcome:
      'A cybersecurity analytics project demonstrating how data analysis can support threat monitoring and risk review.',
    skills: ['Security analytics', 'Anomaly detection', 'Risk indicators', 'Visualization'],
    learned:
      'This project helped me think about analytics from an operational risk and prioritisation perspective.',
    github: 'https://github.com/graysonchia/ThreatLens',
    demo: '',
  },
  {
    id: 'urbanpulse',
    title: 'UrbanPulse',
    domain: 'Transportation',
    emoji: 'UP',
    image: '',
    imageAlt: 'UrbanPulse urban analytics dashboard preview',
    tagline: 'Urban Data & City Insights',
    tags: ['Python', 'Urban Analytics', 'Data Visualization', 'Dashboard', 'EDA'],
    category: 'Urban Analytics - City Insights',
    summary:
      'An urban analytics project that explores city-level patterns and turns public data into clearer location-based insight.',
    problem:
      'Urban data is often spread across different indicators, making it hard to understand city patterns without structured analysis and visualisation.',
    dataset:
      'Urban and city-related data prepared for exploratory analysis, comparison, and dashboard-style reporting.',
    tools: ['Python', 'pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    methodology: [
      'Prepared urban data for analysis',
      'Compared indicators across locations or time periods',
      'Built visual summaries for city-level patterns',
      'Presented findings as portfolio-ready insights',
    ],
    insights: [
      'Surfaces patterns across urban indicators',
      'Supports clearer comparison between city data points',
      'Shows how analytics can improve public-data interpretation',
    ],
    outcome:
      'A civic-style analytics project demonstrating data cleaning, exploratory analysis, and insight presentation.',
    skills: ['Urban analytics', 'EDA', 'Visualization', 'Insight communication'],
    learned:
      'This project reinforced the value of context when translating public datasets into useful conclusions.',
    github: 'https://github.com/graysonchia/UrbanPulse',
    demo: '',
  },
  {
    id: 'crudetrack',
    title: 'CrudeTrack',
    domain: 'Oil & Gas',
    emoji: 'CT',
    image: '',
    imageAlt: 'CrudeTrack crude oil analytics dashboard preview',
    tagline: 'Crude Oil Market Analytics',
    tags: ['Python', 'Oil & Gas', 'Time Series', 'Forecasting', 'Dashboard'],
    category: 'Energy Analytics - Market Trends',
    summary:
      'An energy analytics project focused on crude oil market movement, trend monitoring, and visual reporting.',
    problem:
      'Oil price movement affects energy decisions and business planning, but raw market data needs structured analysis to reveal useful patterns.',
    dataset:
      'Crude oil and energy market time-series data prepared for trend analysis and visual reporting.',
    tools: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'Seaborn'],
    methodology: [
      'Prepared crude oil price records for time-series analysis',
      'Explored trend and volatility patterns',
      'Created visual summaries for market movement',
      'Organised findings into an energy analytics workflow',
    ],
    insights: [
      'Shows trend movement across oil market data',
      'Supports analysis of volatility and price shifts',
      'Connects market data with energy-sector reporting',
    ],
    outcome:
      'An energy analytics project demonstrating time-series exploration and business-focused market visualisation.',
    skills: ['Energy analytics', 'Time-series analysis', 'Market trends', 'Visualization'],
    learned:
      'This project helped me practise analysing external market data through a business and energy-sector lens.',
    github: 'https://github.com/graysonchia/CrudeTrack',
    demo: '',
  },
  {
    id: 'creditiq',
    title: 'CreditIQ',
    domain: 'Finance',
    emoji: 'CQ',
    image: '',
    imageAlt: 'CreditIQ credit risk analytics dashboard preview',
    tagline: 'Credit Risk Analytics',
    tags: ['Python', 'Risk Analytics', 'Classification', 'Machine Learning', 'Finance'],
    category: 'Finance Analytics - Credit Risk',
    summary:
      'A credit risk analytics project that explores borrower risk indicators and machine-learning-driven classification workflows.',
    problem:
      'Credit decisions require clear risk signals, but borrower data needs careful preparation before patterns and risk groups can be trusted.',
    dataset:
      'Credit and borrower-style records prepared for risk analysis, classification, and reporting.',
    tools: ['Python', 'pandas', 'scikit-learn', 'Matplotlib', 'Seaborn'],
    methodology: [
      'Prepared borrower and credit-style records for modelling',
      'Explored risk indicators and feature relationships',
      'Built classification-oriented analysis for credit risk groups',
      'Summarised outputs in a finance analytics format',
    ],
    insights: [
      'Identifies variables linked to credit risk patterns',
      'Supports segmentation of risk groups',
      'Shows practical application of classification workflows',
    ],
    outcome:
      'A finance analytics project demonstrating risk-focused feature analysis and machine-learning preparation.',
    skills: ['Credit risk', 'Classification', 'Feature engineering', 'Finance analytics'],
    learned:
      'This project sharpened my ability to connect model features with financial risk interpretation.',
    github: 'https://github.com/graysonchia/CreditIQ',
    demo: '',
  },
  {
    id: 'financial-risk-analytics',
    title: 'Financial Risk Analytics',
    domain: 'Finance',
    emoji: 'FR',
    image: '',
    imageAlt: 'Financial Risk Analytics dashboard preview',
    tagline: 'Financial Risk Reporting & Analysis',
    tags: ['Python', 'Finance Analytics', 'Risk Analysis', 'Dashboard', 'Visualization'],
    category: 'Finance Analytics - Risk Reporting',
    summary:
      'A financial risk analytics project focused on preparing, analysing, and visualising risk indicators for clearer financial reporting.',
    problem:
      'Financial risk data can be difficult to interpret when it is not organised into clear measures, comparisons, and visual summaries.',
    dataset:
      'Financial risk records prepared for exploratory analysis, metric calculation, and reporting.',
    tools: ['Python', 'pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    methodology: [
      'Cleaned and prepared financial records for analysis',
      'Calculated risk-oriented indicators',
      'Compared financial patterns through visual summaries',
      'Presented findings in a structured reporting format',
    ],
    insights: [
      'Highlights financial risk patterns and comparison points',
      'Supports clearer communication of risk indicators',
      'Demonstrates structured finance data analysis',
    ],
    outcome:
      'A finance-focused analytics project showing how raw financial data can be converted into clearer risk reporting.',
    skills: ['Financial analysis', 'Risk reporting', 'Data cleaning', 'Visualization'],
    learned:
      'This project strengthened my ability to organise risk measures into a format that supports decision-making.',
    github: 'https://github.com/graysonchia/Financial-Risk-Analytics',
    demo: '',
  },
  {
    id: 'safety-environmental-risk-analytics',
    title: 'Safety Environmental Risk Analytics',
    domain: 'Security & Risk',
    emoji: 'SE',
    image: '',
    imageAlt: 'Safety Environmental Risk Analytics dashboard preview',
    tagline: 'Safety & Environmental Risk Insights',
    tags: ['Python', 'Risk Analytics', 'ESG', 'Visualization', 'Dashboard'],
    category: 'Risk Analytics - Safety & Environment',
    summary:
      'A safety and environmental analytics project focused on identifying risk patterns and presenting operational insight clearly.',
    problem:
      'Safety and environmental records need structured reporting so teams can understand risk areas and prioritise action.',
    dataset:
      'Safety and environmental risk records prepared for exploratory analysis, comparison, and reporting.',
    tools: ['Python', 'pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    methodology: [
      'Prepared safety and environmental records for analysis',
      'Grouped risk indicators into clearer reporting categories',
      'Built visual summaries for incident or risk comparison',
      'Translated findings into practical risk insights',
    ],
    insights: [
      'Highlights recurring safety and environmental patterns',
      'Supports prioritisation of risk areas',
      'Shows how analytics can support operational review',
    ],
    outcome:
      'A risk analytics project demonstrating data preparation, visual reporting, and operational insight communication.',
    skills: ['Risk analytics', 'Safety reporting', 'Environmental analytics', 'Visualization'],
    learned:
      'This project helped me practise making technical analysis useful for operational and compliance-focused contexts.',
    github: 'https://github.com/graysonchia/Safety-Environmental-Risk-Analytics',
    demo: '',
  },
  {
    id: 'smart-reimbursement-system',
    title: 'Smart Reimbursement System',
    domain: 'Software Systems',
    emoji: 'SR',
    image: '',
    imageAlt: 'Smart Reimbursement System application preview',
    tagline: 'Claims Workflow & Reimbursement Management',
    tags: ['Software Engineering', 'Database', 'Workflow', 'Web App', 'Management System'],
    category: 'Software Engineering - Business System',
    summary:
      'A reimbursement management system designed to organise claims, approval workflows, and business process tracking.',
    problem:
      'Manual reimbursement processes can be slow and difficult to track without a system for claim submission, review, and status management.',
    dataset:
      'Application records for users, reimbursement claims, claim statuses, and approval workflow activity.',
    tools: ['Database Design', 'SQL', 'Web Development', 'UI/UX', 'System Design'],
    methodology: [
      'Designed reimbursement workflow and user roles',
      'Modelled claim records and approval status tracking',
      'Built application flows for submission and review',
      'Focused on making business process information easier to manage',
    ],
    insights: [
      'Shows how workflow systems reduce manual tracking effort',
      'Demonstrates database-backed business process design',
      'Supports clearer status visibility for claims',
    ],
    outcome:
      'A business software project demonstrating process modelling, database design, and practical application development.',
    skills: ['System design', 'Database modelling', 'Workflow design', 'Business applications'],
    learned:
      'This project strengthened my understanding of how software design supports everyday business operations.',
    github: 'https://github.com/graysonchia/Smart-Reimbursement-System',
    demo: '',
  },
  {
    id: 'advanced-tuition-centre',
    title: 'Advanced Tuition Centre',
    domain: 'Software Systems',
    emoji: 'AT',
    image: '',
    imageAlt: 'Advanced Tuition Centre management system preview',
    tagline: 'Tuition Centre Management System',
    tags: ['Software Engineering', 'Database', 'Web App', 'Management System', 'UI/UX'],
    category: 'Software Engineering - Education System',
    summary:
      'An education management system project for organising tuition centre records, student information, and administrative workflows.',
    problem:
      'Tuition centres need structured systems to manage students, classes, and administrative records without relying on scattered manual files.',
    dataset:
      'Education management records such as students, classes, staff, schedules, and administrative details.',
    tools: ['Database Design', 'SQL', 'Web Development', 'UI/UX', 'System Design'],
    methodology: [
      'Designed education management workflows',
      'Structured records for students, classes, and staff',
      'Built application flows for administrative use',
      'Focused on practical usability for repeated management tasks',
    ],
    insights: [
      'Demonstrates how database structure supports education operations',
      'Shows practical management-system design',
      'Connects user workflows with system requirements',
    ],
    outcome:
      'A software engineering project showing practical database-backed application design for an education setting.',
    skills: ['Database design', 'Education systems', 'CRUD workflows', 'UI/UX'],
    learned:
      'This project helped me practise translating real administrative workflows into a structured software system.',
    github: 'https://github.com/graysonchia/Advanced-Tuition-Centre',
    demo: '',
  },
  {
    id: 'jobnow',
    title: 'Jobnow',
    domain: 'Software Systems',
    emoji: 'JN',
    image: '/projects/jobnow-app.png',
    imageAlt: 'Jobnow job search application preview',
    tagline: 'Job Search & Recruitment Application',
    tags: ['Mobile App', 'Software Engineering', 'UI/UX', 'Job Platform', 'Database'],
    category: 'Software Engineering - Recruitment App',
    summary:
      'A job search application project focused on connecting job seekers with opportunities through a clean recruitment workflow.',
    problem:
      'Job seekers need a simple way to browse opportunities, manage applications, and understand role details without friction.',
    dataset:
      'Application data for job listings, users, profiles, and recruitment workflow records.',
    tools: ['Mobile Development', 'Database Design', 'UI/UX', 'System Design'],
    methodology: [
      'Designed job seeker and job listing workflows',
      'Structured application data around listings, profiles, and interactions',
      'Built user-facing screens for browsing and reviewing roles',
      'Focused on clear navigation and practical recruitment use cases',
    ],
    insights: [
      'Shows how recruitment workflows can be simplified through app design',
      'Demonstrates practical UI planning for job discovery',
      'Connects database structure with user-facing application screens',
    ],
    outcome:
      'A recruitment application project demonstrating mobile-style product thinking, workflow design, and software implementation.',
    skills: ['Mobile app design', 'Recruitment workflows', 'Database modelling', 'UI/UX'],
    learned:
      'This project helped me think about how users move through a practical app from discovery to action.',
    github: 'https://github.com/graysonchia/Jobnow-',
    demo: '',
  },
  {
    id: 'sales-data-analysis',
    title: 'Sales Data Analysis',
    domain: 'Business Analytics',
    emoji: 'SA',
    image: '',
    imageAlt: 'Sales Data Analysis dashboard preview',
    tagline: 'Sales Performance Analytics',
    tags: ['Python', 'Sales Analytics', 'EDA', 'Visualization', 'Dashboard'],
    category: 'Business Analytics - Sales Performance',
    summary:
      'A sales analytics project focused on exploring business performance, revenue patterns, and data-backed commercial insights.',
    problem:
      'Sales records can reveal useful trends, but they need cleaning, aggregation, and visual reporting before performance patterns are clear.',
    dataset:
      'Sales transaction records prepared for exploratory analysis, revenue summaries, and business reporting.',
    tools: ['Python', 'pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    methodology: [
      'Prepared sales records for analysis',
      'Aggregated performance by relevant business dimensions',
      'Visualised sales patterns, comparisons, and trends',
      'Summarised findings for business decision-making',
    ],
    insights: [
      'Highlights sales performance patterns across the dataset',
      'Supports comparison of revenue or transaction indicators',
      'Demonstrates practical business analytics reporting',
    ],
    outcome:
      'A business analytics project showing how sales data can be transformed into clearer commercial insight.',
    skills: ['Sales analytics', 'EDA', 'Business reporting', 'Visualization'],
    learned:
      'This project reinforced how important clean aggregation and simple visuals are for business analysis.',
    github: 'https://github.com/graysonchia/Sales-Data-Analysis',
    demo: '',
  },
]
