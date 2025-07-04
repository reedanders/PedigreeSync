// Types and demo measurements for BCSLineChart

export type BCSMeasurement = {
  seriesName: string;
  date: string;
  value: number;
};

export const bcsMeasurements: BCSMeasurement[] = [
  // Target Range 
  { seriesName: "Target Range", date: "2024-06-01", value: 2.25 },
  { seriesName: "Target Range", date: "2024-10-02", value: 3.25 },
  { seriesName: "Target Range", date: "2024-11-18", value: 2.5 },
  { seriesName: "Target Range", date: "2025-02-28", value: 3 },
  { seriesName: "Target Range", date: "2025-06-02", value: 2.25 },
  { seriesName: "Target Range", date: "2025-10-06", value: 3.25 },

  // S001: 840003123456789
  { seriesName: "840003123456789", date: "2024-06-01", value: 2.0 },
  { seriesName: "840003123456789", date: "2024-10-02", value: 3.0 },
  { seriesName: "840003123456789", date: "2024-11-18", value: 2.5 },
  { seriesName: "840003123456789", date: "2025-02-28", value: 2.5 },
  { seriesName: "840003123456789", date: "2025-06-02", value: 2.0 },

  // S002: 840003123456790
  { seriesName: "840003123456790", date: "2024-06-01", value: 2.5 },
  { seriesName: "840003123456790", date: "2024-10-02", value: 3.0 },
  { seriesName: "840003123456790", date: "2024-11-18", value: 2.0 },
  { seriesName: "840003123456790", date: "2025-02-28", value: 3.0 },
  { seriesName: "840003123456790", date: "2025-06-02", value: 2.5 },

  // S003: 840003123456791
  { seriesName: "840003123456791", date: "2024-06-01", value: 1.5 },
  { seriesName: "840003123456791", date: "2024-10-02", value: 2.0 },
  { seriesName: "840003123456791", date: "2024-11-18", value: 1.5 },
  { seriesName: "840003123456791", date: "2025-02-28", value: 1.0 },
  { seriesName: "840003123456791", date: "2025-06-02", value: 1.0 },

  // S004: 840003123456792
  { seriesName: "840003123456792", date: "2024-06-01", value: 2.5 },
  { seriesName: "840003123456792", date: "2024-10-02", value: 3.5 },
  { seriesName: "840003123456792", date: "2024-11-18", value: 2.5 },
  { seriesName: "840003123456792", date: "2025-02-28", value: 3.0 },
  { seriesName: "840003123456792", date: "2025-06-02", value: 2.5 },

  // S005: 840003123456793
  { seriesName: "840003123456793", date: "2024-06-01", value: 2.0 },
  { seriesName: "840003123456793", date: "2024-10-02", value: 2.5 },
  { seriesName: "840003123456793", date: "2024-11-18", value: 2.5 },
  { seriesName: "840003123456793", date: "2025-02-28", value: 2.5 },
  { seriesName: "840003123456793", date: "2025-06-02", value: 2.0 },

  // S006: 840003123456794
  { seriesName: "840003123456794", date: "2024-06-01", value: 2.5 },
  { seriesName: "840003123456794", date: "2024-10-02", value: 3.0 },
  { seriesName: "840003123456794", date: "2024-11-18", value: 2.0 },
  { seriesName: "840003123456794", date: "2025-02-28", value: 3.0 },
  { seriesName: "840003123456794", date: "2025-06-02", value: 2.5 },

  // S007: 840003123456795
  { seriesName: "840003123456795", date: "2024-06-01", value: 2.0 },
  { seriesName: "840003123456795", date: "2024-10-02", value: 2.0 },
  { seriesName: "840003123456795", date: "2024-11-18", value: 1.5 },
  { seriesName: "840003123456795", date: "2025-02-28", value: 1.5 },
  { seriesName: "840003123456795", date: "2025-06-02", value: 1.0 },

  // S008: 840003123456796
  { seriesName: "840003123456796", date: "2024-06-01", value: 2.5 },
  { seriesName: "840003123456796", date: "2024-10-02", value: 3.5 },
  { seriesName: "840003123456796", date: "2024-11-18", value: 2.5 },
  { seriesName: "840003123456796", date: "2025-02-28", value: 3.0 },
  { seriesName: "840003123456796", date: "2025-06-02", value: 2.5 },

  // S009: 840003123456797
  { seriesName: "840003123456797", date: "2024-06-01", value: 2.0 },
  { seriesName: "840003123456797", date: "2024-10-02", value: 3.0 },
  { seriesName: "840003123456797", date: "2024-11-18", value: 2.5 },
  { seriesName: "840003123456797", date: "2025-02-28", value: 2.5 },
  { seriesName: "840003123456797", date: "2025-06-02", value: 2.0 },

  // S010: 840003123456798
  { seriesName: "840003123456798", date: "2024-06-01", value: 2.5 },
  { seriesName: "840003123456798", date: "2024-10-02", value: 3.0 },
  { seriesName: "840003123456798", date: "2024-11-18", value: 2.0 },
  { seriesName: "840003123456798", date: "2025-02-28", value: 3.0 },
  { seriesName: "840003123456798", date: "2025-06-02", value: 2.5 },

  // S011: 840003123456799
  { seriesName: "840003123456799", date: "2024-06-01", value: 2.0 },
  { seriesName: "840003123456799", date: "2024-10-02", value: 2.5 },
  { seriesName: "840003123456799", date: "2024-11-18", value: 2.0 },
  { seriesName: "840003123456799", date: "2025-02-28", value: 2.5 },
  { seriesName: "840003123456799", date: "2025-06-02", value: 2.0 },

  // S012: 840003123456800
  { seriesName: "840003123456800", date: "2024-06-01", value: 2.5 },
  { seriesName: "840003123456800", date: "2024-10-02", value: 3.5 },
  { seriesName: "840003123456800", date: "2024-11-18", value: 2.5 },
  { seriesName: "840003123456800", date: "2025-02-28", value: 3.0 },
  { seriesName: "840003123456800", date: "2025-06-02", value: 2.5 },

  // S013: 840003123456801
  { seriesName: "840003123456801", date: "2024-06-01", value: 2.0 },
  { seriesName: "840003123456801", date: "2024-10-02", value: 3.0 },
  { seriesName: "840003123456801", date: "2024-11-18", value: 2.5 },
  { seriesName: "840003123456801", date: "2025-02-28", value: 2.5 },
  { seriesName: "840003123456801", date: "2025-06-02", value: 2.0 },

  // S014: 840003123456802
  { seriesName: "840003123456802", date: "2024-06-01", value: 2.5 },
  { seriesName: "840003123456802", date: "2024-10-02", value: 3.0 },
  { seriesName: "840003123456802", date: "2024-11-18", value: 2.0 },
  { seriesName: "840003123456802", date: "2025-02-28", value: 3.0 },
  { seriesName: "840003123456802", date: "2025-06-02", value: 2.5 },

  // S015: 840003123456803
  { seriesName: "840003123456803", date: "2024-06-01", value: 2.0 },
  { seriesName: "840003123456803", date: "2024-10-02", value: 2.5 },
  { seriesName: "840003123456803", date: "2024-11-18", value: 2.0 },
  { seriesName: "840003123456803", date: "2025-02-28", value: 2.5 },
  { seriesName: "840003123456803", date: "2025-06-02", value: 2.0 },

  // S016: 840003123456804
  { seriesName: "840003123456804", date: "2024-06-01", value: 2.5 },
  { seriesName: "840003123456804", date: "2024-10-02", value: 3.5 },
  { seriesName: "840003123456804", date: "2024-11-18", value: 2.5 },
  { seriesName: "840003123456804", date: "2025-02-28", value: 3.0 },
  { seriesName: "840003123456804", date: "2025-06-02", value: 2.5 },

  // S017: 840003123456805
  { seriesName: "840003123456805", date: "2024-06-01", value: 2.0 },
  { seriesName: "840003123456805", date: "2024-10-02", value: 3.0 },
  { seriesName: "840003123456805", date: "2024-11-18", value: 2.5 },
  { seriesName: "840003123456805", date: "2025-02-28", value: 2.5 },
  { seriesName: "840003123456805", date: "2025-06-02", value: 2.0 },

  // S018: 840003123456806
  { seriesName: "840003123456806", date: "2024-06-01", value: 2.5 },
  { seriesName: "840003123456806", date: "2024-10-02", value: 3.0 },
  { seriesName: "840003123456806", date: "2024-11-18", value: 2.0 },
  { seriesName: "840003123456806", date: "2025-02-28", value: 3.0 },
  { seriesName: "840003123456806", date: "2025-06-02", value: 2.5 },

  // S019: 840003123456807
  { seriesName: "840003123456807", date: "2024-06-01", value: 2.0 },
  { seriesName: "840003123456807", date: "2024-10-02", value: 2.5 },
  { seriesName: "840003123456807", date: "2024-11-18", value: 2.0 },
  { seriesName: "840003123456807", date: "2025-02-28", value: 2.5 },
  { seriesName: "840003123456807", date: "2025-06-02", value: 2.0 },

  // S020: 840003123456808
  { seriesName: "840003123456808", date: "2024-06-01", value: 2.5 },
  { seriesName: "840003123456808", date: "2024-10-02", value: 3.5 },
  { seriesName: "840003123456808", date: "2024-11-18", value: 2.5 },
  { seriesName: "840003123456808", date: "2025-02-28", value: 3.0 },
  { seriesName: "840003123456808", date: "2025-06-02", value: 2.5 },

  // S021: 840003123456809
  { seriesName: "840003123456809", date: "2024-06-01", value: 2.0 },
  { seriesName: "840003123456809", date: "2024-10-02", value: 3.0 },
  { seriesName: "840003123456809", date: "2024-11-18", value: 2.5 },
  { seriesName: "840003123456809", date: "2025-02-28", value: 2.5 },
  { seriesName: "840003123456809", date: "2025-06-02", value: 2.0 },

  // S022: 840003123456810
  { seriesName: "840003123456810", date: "2024-06-01", value: 2.5 },
  { seriesName: "840003123456810", date: "2024-10-02", value: 3.0 },
  { seriesName: "840003123456810", date: "2024-11-18", value: 2.0 },
  { seriesName: "840003123456810", date: "2025-02-28", value: 3.0 },
  { seriesName: "840003123456810", date: "2025-06-02", value: 2.5 },

  // S023: 840003123456811
  { seriesName: "840003123456811", date: "2024-06-01", value: 2.0 },
  { seriesName: "840003123456811", date: "2024-10-02", value: 2.5 },
  { seriesName: "840003123456811", date: "2024-11-18", value: 2.0 },
  { seriesName: "840003123456811", date: "2025-02-28", value: 2.5 },
  { seriesName: "840003123456811", date: "2025-06-02", value: 2.0 },

  // S024: 840003123456812
  { seriesName: "840003123456812", date: "2024-06-01", value: 2.5 },
  { seriesName: "840003123456812", date: "2024-10-02", value: 3.5 },
  { seriesName: "840003123456812", date: "2024-11-18", value: 2.5 },
  { seriesName: "840003123456812", date: "2025-02-28", value: 3.0 },
  { seriesName: "840003123456812", date: "2025-06-02", value: 2.5 },

  // S025: 840003123456813
  { seriesName: "840003123456813", date: "2024-06-01", value: 2.0 },
  { seriesName: "840003123456813", date: "2024-10-02", value: 3.0 },
  { seriesName: "840003123456813", date: "2024-11-18", value: 2.5 },
  { seriesName: "840003123456813", date: "2025-02-28", value: 2.5 },
  { seriesName: "840003123456813", date: "2025-06-02", value: 2.0 },

  // S026: 840003123456814
  { seriesName: "840003123456814", date: "2024-06-01", value: 2.5 },
  { seriesName: "840003123456814", date: "2024-10-02", value: 3.0 },
  { seriesName: "840003123456814", date: "2024-11-18", value: 2.0 },
  { seriesName: "840003123456814", date: "2025-02-28", value: 3.0 },
  { seriesName: "840003123456814", date: "2025-06-02", value: 2.5 },

  // S027: 840003123456815
  { seriesName: "840003123456815", date: "2024-06-01", value: 2.0 },
  { seriesName: "840003123456815", date: "2024-10-02", value: 2.5 },
  { seriesName: "840003123456815", date: "2024-11-18", value: 2.0 },
  { seriesName: "840003123456815", date: "2025-02-28", value: 2.5 },
  { seriesName: "840003123456815", date: "2025-06-02", value: 2.0 },

  // S028: 840003123456816
  { seriesName: "840003123456816", date: "2024-06-01", value: 2.5 },
  { seriesName: "840003123456816", date: "2024-10-02", value: 3.5 },
  { seriesName: "840003123456816", date: "2024-11-18", value: 2.5 },
  { seriesName: "840003123456816", date: "2025-02-28", value: 3.0 },
  { seriesName: "840003123456816", date: "2025-06-02", value: 2.5 },

  // S029: 840003123456817
  { seriesName: "840003123456817", date: "2024-06-01", value: 2.0 },
  { seriesName: "840003123456817", date: "2024-10-02", value: 3.0 },
  { seriesName: "840003123456817", date: "2024-11-18", value: 2.5 },
  { seriesName: "840003123456817", date: "2025-02-28", value: 2.5 },
  { seriesName: "840003123456817", date: "2025-06-02", value: 2.0 },

  // S030: 840003123456818
  { seriesName: "840003123456818", date: "2024-06-01", value: 2.5 },
  { seriesName: "840003123456818", date: "2024-10-02", value: 3.0 },
  { seriesName: "840003123456818", date: "2024-11-18", value: 2.0 },
  { seriesName: "840003123456818", date: "2025-02-28", value: 3.0 },
  { seriesName: "840003123456818", date: "2025-06-02", value: 2.5 },
];