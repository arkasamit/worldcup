// FIFA World Cup 2026 - Fixtures with Bangladesh Time Display (UTC+6)
(function() {
  // === FIXTURES DATA (All times in UTC) ===
  const fixtures = [
    // ===== GROUP A: Mexico, South Korea, Czech Republic, South Africa =====
    { dateUTC: '2026-06-11T19:00:00Z', team1: 'Mexico', flag1: '🇲🇽', team2: 'South Africa', flag2: '🇿🇦', stage: 'Group A', matchday: 1 },
    { dateUTC: '2026-06-11T23:00:00Z', team1: 'South Korea', flag1: '🇰🇷', team2: 'Czech Republic', flag2: '🇨🇿', stage: 'Group A', matchday: 1 },
    { dateUTC: '2026-06-18T16:00:00Z', team1: 'Czech Republic', flag1: '🇨🇿', team2: 'South Africa', flag2: '🇿🇦', stage: 'Group A', matchday: 2 },
    { dateUTC: '2026-06-18T23:00:00Z', team1: 'Mexico', flag1: '🇲🇽', team2: 'South Korea', flag2: '🇰🇷', stage: 'Group A', matchday: 2 },
    { dateUTC: '2026-06-24T23:00:00Z', team1: 'Czech Republic', flag1: '🇨🇿', team2: 'Mexico', flag2: '🇲🇽', stage: 'Group A', matchday: 3 },
    { dateUTC: '2026-06-24T23:00:00Z', team1: 'South Africa', flag1: '🇿🇦', team2: 'South Korea', flag2: '🇰🇷', stage: 'Group A', matchday: 3 },

    // ===== GROUP B: Canada, Bosnia and Herzegovina, Qatar, Switzerland =====
    { dateUTC: '2026-06-12T19:00:00Z', team1: 'Canada', flag1: '🇨🇦', team2: 'Bosnia and Herzegovina', flag2: '🇧🇦', stage: 'Group B', matchday: 1 },
    { dateUTC: '2026-06-13T19:00:00Z', team1: 'Qatar', flag1: '🇶🇦', team2: 'Switzerland', flag2: '🇨🇭', stage: 'Group B', matchday: 1 },
    { dateUTC: '2026-06-18T19:00:00Z', team1: 'Switzerland', flag1: '🇨🇭', team2: 'Bosnia and Herzegovina', flag2: '🇧🇦', stage: 'Group B', matchday: 2 },
    { dateUTC: '2026-06-18T22:00:00Z', team1: 'Canada', flag1: '🇨🇦', team2: 'Qatar', flag2: '🇶🇦', stage: 'Group B', matchday: 2 },
    { dateUTC: '2026-06-24T19:00:00Z', team1: 'Switzerland', flag1: '🇨🇭', team2: 'Canada', flag2: '🇨🇦', stage: 'Group B', matchday: 3 },
    { dateUTC: '2026-06-24T19:00:00Z', team1: 'Bosnia and Herzegovina', flag1: '🇧🇦', team2: 'Qatar', flag2: '🇶🇦', stage: 'Group B', matchday: 3 },

    // ===== GROUP C: Brazil, Morocco, Haiti, Scotland =====
    { dateUTC: '2026-06-13T22:00:00Z', team1: 'Brazil', flag1: '🇧🇷', team2: 'Morocco', flag2: '🇲🇦', stage: 'Group C', matchday: 1 },
    { dateUTC: '2026-06-14T01:00:00Z', team1: 'Haiti', flag1: '🇭🇹', team2: 'Scotland', flag2: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', stage: 'Group C', matchday: 1 },
    { dateUTC: '2026-06-19T22:00:00Z', team1: 'Scotland', flag1: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', team2: 'Morocco', flag2: '🇲🇦', stage: 'Group C', matchday: 2 },
    { dateUTC: '2026-06-20T00:30:00Z', team1: 'Brazil', flag1: '🇧🇷', team2: 'Haiti', flag2: '🇭🇹', stage: 'Group C', matchday: 2 },
    { dateUTC: '2026-06-24T22:00:00Z', team1: 'Scotland', flag1: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', team2: 'Brazil', flag2: '🇧🇷', stage: 'Group C', matchday: 3 },
    { dateUTC: '2026-06-24T22:00:00Z', team1: 'Morocco', flag1: '🇲🇦', team2: 'Haiti', flag2: '🇭🇹', stage: 'Group C', matchday: 3 },

    // ===== GROUP D: USA, Paraguay, Australia, Turkey =====
    { dateUTC: '2026-06-13T01:00:00Z', team1: 'USA', flag1: '🇺🇸', team2: 'Paraguay', flag2: '🇵🇾', stage: 'Group D', matchday: 1 },
    { dateUTC: '2026-06-14T02:00:00Z', team1: 'Australia', flag1: '🇦🇺', team2: 'Turkey', flag2: '🇹🇷', stage: 'Group D', matchday: 1 },
    { dateUTC: '2026-06-19T19:00:00Z', team1: 'USA', flag1: '🇺🇸', team2: 'Australia', flag2: '🇦🇺', stage: 'Group D', matchday: 2 },
    { dateUTC: '2026-06-20T02:00:00Z', team1: 'Turkey', flag1: '🇹🇷', team2: 'Paraguay', flag2: '🇵🇾', stage: 'Group D', matchday: 2 },
    { dateUTC: '2026-06-25T02:00:00Z', team1: 'Turkey', flag1: '🇹🇷', team2: 'USA', flag2: '🇺🇸', stage: 'Group D', matchday: 3 },
    { dateUTC: '2026-06-25T02:00:00Z', team1: 'Paraguay', flag1: '🇵🇾', team2: 'Australia', flag2: '🇦🇺', stage: 'Group D', matchday: 3 },

    // ===== GROUP E: Germany, Curaçao, Ivory Coast, Ecuador =====
    { dateUTC: '2026-06-14T17:00:00Z', team1: 'Germany', flag1: '🇩🇪', team2: 'Curaçau', flag2: '🇨🇼', stage: 'Group E', matchday: 1 },
    { dateUTC: '2026-06-14T23:00:00Z', team1: 'Ivory Coast', flag1: '🇨🇮', team2: 'Ecuador', flag2: '🇪🇨', stage: 'Group E', matchday: 1 },
    { dateUTC: '2026-06-20T20:00:00Z', team1: 'Germany', flag1: '🇩🇪', team2: 'Ivory Coast', flag2: '🇨🇮', stage: 'Group E', matchday: 2 },
    { dateUTC: '2026-06-20T23:00:00Z', team1: 'Ecuador', flag1: '🇪🇨', team2: 'Curaçau', flag2: '🇨🇼', stage: 'Group E', matchday: 2 },
    { dateUTC: '2026-06-25T20:00:00Z', team1: 'Curaçau', flag1: '🇨🇼', team2: 'Ivory Coast', flag2: '🇨🇮', stage: 'Group E', matchday: 3 },
    { dateUTC: '2026-06-25T20:00:00Z', team1: 'Ecuador', flag1: '🇪🇨', team2: 'Germany', flag2: '🇩🇪', stage: 'Group E', matchday: 3 },

    // ===== GROUP F: Netherlands, Japan, Sweden, Tunisia =====
    { dateUTC: '2026-06-14T17:00:00Z', team1: 'Netherlands', flag1: '🇳🇱', team2: 'Japan', flag2: '🇯🇵', stage: 'Group F', matchday: 1 },
    { dateUTC: '2026-06-14T22:00:00Z', team1: 'Sweden', flag1: '🇸🇪', team2: 'Tunisia', flag2: '🇹🇳', stage: 'Group F', matchday: 1 },
    { dateUTC: '2026-06-20T16:00:00Z', team1: 'Netherlands', flag1: '🇳🇱', team2: 'Sweden', flag2: '🇸🇪', stage: 'Group F', matchday: 2 },
    { dateUTC: '2026-06-21T02:00:00Z', team1: 'Tunisia', flag1: '🇹🇳', team2: 'Japan', flag2: '🇯🇵', stage: 'Group F', matchday: 2 },
    { dateUTC: '2026-06-25T23:00:00Z', team1: 'Japan', flag1: '🇯🇵', team2: 'Sweden', flag2: '🇸🇪', stage: 'Group F', matchday: 3 },
    { dateUTC: '2026-06-25T23:00:00Z', team1: 'Tunisia', flag1: '🇹🇳', team2: 'Netherlands', flag2: '🇳🇱', stage: 'Group F', matchday: 3 },

    // ===== GROUP G: Belgium, Egypt, Iran, New Zealand =====
    { dateUTC: '2026-06-15T19:00:00Z', team1: 'Belgium', flag1: '🇧🇪', team2: 'Egypt', flag2: '🇪🇬', stage: 'Group G', matchday: 1 },
    { dateUTC: '2026-06-15T23:00:00Z', team1: 'Iran', flag1: '🇮🇷', team2: 'New Zealand', flag2: '🇳🇿', stage: 'Group G', matchday: 1 },
    { dateUTC: '2026-06-21T19:00:00Z', team1: 'Belgium', flag1: '🇧🇪', team2: 'Iran', flag2: '🇮🇷', stage: 'Group G', matchday: 2 },
    { dateUTC: '2026-06-21T23:00:00Z', team1: 'New Zealand', flag1: '🇳🇿', team2: 'Egypt', flag2: '🇪🇬', stage: 'Group G', matchday: 2 },
    { dateUTC: '2026-06-27T02:00:00Z', team1: 'Egypt', flag1: '🇪🇬', team2: 'Iran', flag2: '🇮🇷', stage: 'Group G', matchday: 3 },
    { dateUTC: '2026-06-27T02:00:00Z', team1: 'New Zealand', flag1: '🇳🇿', team2: 'Belgium', flag2: '🇧🇪', stage: 'Group G', matchday: 3 },

    // ===== GROUP H: Spain, Cape Verde, Saudi Arabia, Uruguay =====
    { dateUTC: '2026-06-15T16:00:00Z', team1: 'Spain', flag1: '🇪🇸', team2: 'Cape Verde', flag2: '🇨🇻', stage: 'Group H', matchday: 1 },
    { dateUTC: '2026-06-15T20:00:00Z', team1: 'Saudi Arabia', flag1: '🇸🇦', team2: 'Uruguay', flag2: '🇺🇾', stage: 'Group H', matchday: 1 },
    { dateUTC: '2026-06-21T16:00:00Z', team1: 'Spain', flag1: '🇪🇸', team2: 'Saudi Arabia', flag2: '🇸🇦', stage: 'Group H', matchday: 2 },
    { dateUTC: '2026-06-21T20:00:00Z', team1: 'Uruguay', flag1: '🇺🇾', team2: 'Cape Verde', flag2: '🇨🇻', stage: 'Group H', matchday: 2 },
    { dateUTC: '2026-06-26T23:00:00Z', team1: 'Cape Verde', flag1: '🇨🇻', team2: 'Saudi Arabia', flag2: '🇸🇦', stage: 'Group H', matchday: 3 },
    { dateUTC: '2026-06-27T02:00:00Z', team1: 'Uruguay', flag1: '🇺🇾', team2: 'Spain', flag2: '🇪🇸', stage: 'Group H', matchday: 3 },

    // ===== GROUP I: France, Senegal, Iraq, Norway =====
    { dateUTC: '2026-06-16T19:00:00Z', team1: 'France', flag1: '🇫🇷', team2: 'Senegal', flag2: '🇸🇳', stage: 'Group I', matchday: 1 },
    { dateUTC: '2026-06-16T22:00:00Z', team1: 'Iraq', flag1: '🇮🇶', team2: 'Norway', flag2: '🇳🇴', stage: 'Group I', matchday: 1 },
    { dateUTC: '2026-06-22T21:00:00Z', team1: 'France', flag1: '🇫🇷', team2: 'Iraq', flag2: '🇮🇶', stage: 'Group I', matchday: 2 },
    { dateUTC: '2026-06-23T00:00:00Z', team1: 'Norway', flag1: '🇳🇴', team2: 'Senegal', flag2: '🇸🇳', stage: 'Group I', matchday: 2 },
    { dateUTC: '2026-06-26T19:00:00Z', team1: 'Norway', flag1: '🇳🇴', team2: 'France', flag2: '🇫🇷', stage: 'Group I', matchday: 3 },
    { dateUTC: '2026-06-26T19:00:00Z', team1: 'Senegal', flag1: '🇸🇳', team2: 'Iraq', flag2: '🇮🇶', stage: 'Group I', matchday: 3 },

    // ===== GROUP J: Argentina, Algeria, Austria, Jordan =====
    { dateUTC: '2026-06-17T00:00:00Z', team1: 'Argentina', flag1: '🇦🇷', team2: 'Algeria', flag2: '🇦🇿', stage: 'Group J', matchday: 1 },
    { dateUTC: '2026-06-17T01:00:00Z', team1: 'Austria', flag1: '🇦🇹', team2: 'Jordan', flag2: '🇯🇴', stage: 'Group J', matchday: 1 },
    { dateUTC: '2026-06-22T16:00:00Z', team1: 'Argentina', flag1: '🇦🇷', team2: 'Austria', flag2: '🇦🇹', stage: 'Group J', matchday: 2 },
    { dateUTC: '2026-06-23T02:00:00Z', team1: 'Jordan', flag1: '🇯🇴', team2: 'Algeria', flag2: '🇦🇿', stage: 'Group J', matchday: 2 },
    { dateUTC: '2026-06-27T23:00:00Z', team1: 'Algeria', flag1: '🇦🇿', team2: 'Austria', flag2: '🇦🇹', stage: 'Group J', matchday: 3 },
    { dateUTC: '2026-06-27T23:00:00Z', team1: 'Jordan', flag1: '🇯🇴', team2: 'Argentina', flag2: '🇦🇷', stage: 'Group J', matchday: 3 },

    // ===== GROUP K: Portugal, DR Congo, Uzbekistan, Colombia =====
    { dateUTC: '2026-06-17T16:00:00Z', team1: 'Portugal', flag1: '🇵🇹', team2: 'DR Congo', flag2: '🇨🇩', stage: 'Group K', matchday: 1 },
    { dateUTC: '2026-06-18T02:00:00Z', team1: 'Uzbekistan', flag1: '🇺🇿', team2: 'Colombia', flag2: '🇨🇴', stage: 'Group K', matchday: 1 },
    { dateUTC: '2026-06-23T16:00:00Z', team1: 'Portugal', flag1: '🇵🇹', team2: 'Uzbekistan', flag2: '🇺🇿', stage: 'Group K', matchday: 2 },
    { dateUTC: '2026-06-23T23:00:00Z', team1: 'Colombia', flag1: '🇨🇴', team2: 'DR Congo', flag2: '🇨🇩', stage: 'Group K', matchday: 2 },
    { dateUTC: '2026-06-27T23:30:00Z', team1: 'Colombia', flag1: '🇨🇴', team2: 'Portugal', flag2: '🇵🇹', stage: 'Group K', matchday: 3 },
    { dateUTC: '2026-06-27T23:30:00Z', team1: 'DR Congo',flag1: '🇨🇩', team2: 'Uzbekistan', flag2: '🇺🇿', stage: 'Group K', matchday: 3 },

    // ===== GROUP L: England, Croatia, Ghana, Panama =====
    { dateUTC: '2026-06-17T19:00:00Z', team1: 'England', flag1: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', team2: 'Croatia', flag2: '🇭🇷', stage: 'Group L', matchday: 1 },
    { dateUTC: '2026-06-17T23:00:00Z', team1: 'Ghana', flag1: '🇬🇭', team2: 'Panama', flag2: '🇵🇦', stage: 'Group L', matchday: 1 },
    { dateUTC: '2026-06-23T20:00:00Z', team1: 'England', flag1: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', team2: 'Ghana', flag2: '🇬🇭', stage: 'Group L', matchday: 2 },
    { dateUTC: '2026-06-23T23:00:00Z', team1: 'Panama', flag1: '🇵🇦', team2: 'Croatia', flag2: '🇭🇷', stage: 'Group L', matchday: 2 },
    { dateUTC: '2026-06-27T21:00:00Z', team1: 'Panama', flag1: '🇵🇦', team2: 'England', flag2: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', stage: 'Group L', matchday: 3 },
    { dateUTC: '2026-06-27T21:00:00Z', team1: 'Croatia', flag1: '🇭🇷', team2: 'Ghana', flag2: '🇬🇭', stage: 'Group L', matchday: 3 },

    // ===== KNOCKOUT STAGE =====
    // Round of 32 (June 28 - July 3)
    { dateUTC: '2026-06-28T19:00:00Z', team1: 'Runner-up Group A', flag1: '🏟️', team2: 'Runner-up Group B', flag2: '🏟️', stage: 'Round of 32', matchday: 1 },
    { dateUTC: '2026-06-29T16:30:00Z', team1: 'Winner Group C', flag1: '🏟️', team2: 'Runner-up Group F', flag2: '🏟️', stage: 'Round of 32', matchday: 1 },
    { dateUTC: '2026-06-29T20:30:00Z', team1: 'Winner Group E', flag1: '🏟️', team2: '3rd Place A/B/C/D/F', flag2: '🏟️', stage: 'Round of 32', matchday: 1 },
    { dateUTC: '2026-06-29T23:00:00Z', team1: 'Winner Group F', flag1: '🏟️', team2: 'Runner-up Group C', flag2: '🏟️', stage: 'Round of 32', matchday: 1 },
    { dateUTC: '2026-06-30T16:30:00Z', team1: 'Runner-up Group E', flag1: '🏟️', team2: 'Runner-up Group I', flag2: '🏟️', stage: 'Round of 32', matchday: 2 },
    { dateUTC: '2026-06-30T21:00:00Z', team1: 'Winner Group I', flag1: '🏟️', team2: '3rd Place C/D/F/G/H', flag2: '🏟️', stage: 'Round of 32', matchday: 2 },
    { dateUTC: '2026-07-01T16:00:00Z', team1: 'Winner Group L', flag1: '🏟️', team2: '3rd Place E/H/I/J/K', flag2: '🏟️', stage: 'Round of 32', matchday: 2 },
    { dateUTC: '2026-07-01T22:00:00Z', team1: 'Winner Group G', flag1: '🏟️', team2: '3rd Place A/E/H/I/J', flag2: '🏟️', stage: 'Round of 32', matchday: 2 },
    { dateUTC: '2026-07-01T22:00:00Z', team1: 'Winner Group D', flag1: '🏟️', team2: '3rd Place B/E/F/I/J', flag2: '🏟️', stage: 'Round of 32', matchday: 3 },
    { dateUTC: '2026-07-02T19:00:00Z', team1: 'Winner Group H', flag1: '🏟️', team2: 'Runner-up Group J', flag2: '🏟️', stage: 'Round of 32', matchday: 3 },
    { dateUTC: '2026-07-02T20:00:00Z', team1: 'Runner-up Group K', flag1: '🏟️', team2: 'Runner-up Group L', flag2: '🏟️', stage: 'Round of 32', matchday: 3 },
    { dateUTC: '2026-07-02T23:00:00Z', team1: 'Winner Group B', flag1: '🏟️', team2: '3rd Place E/F/G/I/J', flag2: '🏟️', stage: 'Round of 32', matchday: 3 },
    { dateUTC: '2026-07-03T18:00:00Z', team1: 'Runner-up Group D', flag1: '🏟️', team2: 'Runner-up Group G', flag2: '🏟️', stage: 'Round of 32', matchday: 4 },
    { dateUTC: '2026-07-03T23:30:00Z', team1: 'Winner Group J', flag1: '🏟️', team2: 'Runner-up Group H', flag2: '🏟️', stage: 'Round of 32', matchday: 4 },
    { dateUTC: '2026-07-03T23:30:00Z', team1: 'Winner Group K', flag1: '🏟️', team2: '3rd Place D/E/I/J/L', flag2: '🏟️', stage: 'Round of 32', matchday: 4 },
    { dateUTC: '2026-07-03T23:30:00Z', team1: 'Winner Group A', flag1: '🏟️', team2: '3rd Place C/E/F/H/I', flag2: '🏟️', stage: 'Round of 32', matchday: 4 },

    // Round of 16 (July 4 - 7)
    { dateUTC: '2026-07-04T16:00:00Z', team1: 'Winner Match 73', flag1: '🏟️', team2: 'Winner Match 75', flag2: '🏟️', stage: 'Round of 16', matchday: 1 },
    { dateUTC: '2026-07-04T21:00:00Z', team1: 'Winner Match 74', flag1: '🏟️', team2: 'Winner Match 77', flag2: '🏟️', stage: 'Round of 16', matchday: 1 },
    { dateUTC: '2026-07-05T20:00:00Z', team1: 'Winner Match 76', flag1: '🏟️', team2: 'Winner Match 78', flag2: '🏟️', stage: 'Round of 16', matchday: 2 },
    { dateUTC: '2026-07-05T22:00:00Z', team1: 'Winner Match 79', flag1: '🏟️', team2: 'Winner Match 80', flag2: '🏟️', stage: 'Round of 16', matchday: 2 },
    { dateUTC: '2026-07-06T18:00:00Z', team1: 'Winner Match 83', flag1: '🏟️', team2: 'Winner Match 84', flag2: '🏟️', stage: 'Round of 16', matchday: 3 },
    { dateUTC: '2026-07-06T22:00:00Z', team1: 'Winner Match 81', flag1: '🏟️', team2: 'Winner Match 82', flag2: '🏟️', stage: 'Round of 16', matchday: 3 },
    { dateUTC: '2026-07-07T16:00:00Z', team1: 'Winner Match 86', flag1: '🏟️', team2: 'Winner Match 88', flag2: '🏟️', stage: 'Round of 16', matchday: 4 },
    { dateUTC: '2026-07-07T20:00:00Z', team1: 'Winner Match 85', flag1: '🏟️', team2: 'Winner Match 87', flag2: '🏟️', stage: 'Round of 16', matchday: 4 },

    // Quarterfinals (July 9 - 11)
    { dateUTC: '2026-07-09T20:00:00Z', team1: 'Winner R16 Match 89', flag1: '🏟️', team2: 'Winner R16 Match 90', flag2: '🏟️', stage: 'Quarterfinals', matchday: 1 },
    { dateUTC: '2026-07-10T16:00:00Z', team1: 'Winner R16 Match 93', flag1: '🏟️', team2: 'Winner R16 Match 94', flag2: '🏟️', stage: 'Quarterfinals', matchday: 1 },
    { dateUTC: '2026-07-11T21:00:00Z', team1: 'Winner R16 Match 91', flag1: '🏟️', team2: 'Winner R16 Match 92', flag2: '🏟️', stage: 'Quarterfinals', matchday: 2 },
    { dateUTC: '2026-07-11T23:00:00Z', team1: 'Winner R16 Match 95', flag1: '🏟️', team2: 'Winner R16 Match 96', flag2: '🏟️', stage: 'Quarterfinals', matchday: 2 },

    // Semifinals (July 14 - 15)
    { dateUTC: '2026-07-14T18:00:00Z', team1: 'Winner QF Match 97', flag1: '🏟️', team2: 'Winner QF Match 98', flag2: '🏟️', stage: 'Semifinals', matchday: 1 },
    { dateUTC: '2026-07-15T19:00:00Z', team1: 'Winner QF Match 99', flag1: '🏟️', team2: 'Winner QF Match 100', flag2: '🏟️', stage: 'Semifinals', matchday: 2 },

    // Match for 3rd Place (July 18)
    { dateUTC: '2026-07-18T21:00:00Z', team1: 'Loser SF Match 101', flag1: '🏟️', team2: 'Loser SF Match 102', flag2: '🏟️', stage: 'Third Place Match', matchday: 1 },

    // Final (July 19)
    { dateUTC: '2026-07-19T19:00:00Z', team1: 'Winner SF Match 101', flag1: '🏟️', team2: 'Winner SF Match 102', flag2: '🏟️', stage: 'Final', matchday: 1 }
  ];

  // === GROUPS DATA ===
  const groups = [
    { name: 'A', teams: ['Mexico', 'South Korea', 'Czech Republic', 'South Africa'], flags: ['🇲🇽', '🇰🇷', '🇨🇿', '🇿🇦'] },
    { name: 'B', teams: ['Canada', 'Bosnia and Herzegovina', 'Qatar', 'Switzerland'], flags: ['🇨🇦', '🇧🇦', '🇶🇦', '🇨🇭'] },
    { name: 'C', teams: ['Brazil', 'Morocco', 'Haiti', 'Scotland'], flags: ['🇧🇷', '🇲🇦', '🇭🇹', '🏴󠁧󠁢󠁳󠁣󠁴󠁿'] },
    { name: 'D', teams: ['USA', 'Paraguay', 'Australia', 'Turkey'], flags: ['🇺🇸', '🇵🇾', '🇦🇺', '🇹🇷'] },
    { name: 'E', teams: ['Germany', 'Curaçau', 'Ivory Coast', 'Ecuador'], flags: ['🇩🇪', '🇨🇼', '🇨🇮', '🇪🇨'] },
    { name: 'F', teams: ['Netherlands', 'Japan', 'Sweden', 'Tunisia'], flags: ['🇳🇱', '🇯🇵', '🇸🇪', '🇹🇳'] },
    { name: 'G', teams: ['Belgium', 'Egypt', 'Iran', 'New Zealand'], flags: ['🇧🇪', '🇪🇬', '🇮🇷', '🇳🇿'] },
    { name: 'H', teams: ['Spain', 'Cape Verde', 'Saudi Arabia', 'Uruguay'], flags: ['🇪🇸', '🇨🇻', '🇸🇦', '🇺🇾'] },
    { name: 'I', teams: ['France', 'Senegal', 'Iraq', 'Norway'], flags: ['🇫🇷', '🇸🇳', '🇮🇶', '🇳🇴'] },
    { name: 'J', teams: ['Argentina', 'Algeria', 'Austria', 'Jordan'], flags: ['🇦🇷', '🇦🇿', '🇦🇹', '🇯🇴'] },
    { name: 'K', teams: ['Portugal', 'DR Congo', 'Uzbekistan', 'Colombia'], flags: ['🇵🇹', '🇨🇩', '🇺🇿', '🇨🇴'] },
    { name: 'L', teams: ['England', 'Croatia', 'Ghana', 'Panama'], flags: ['🏴󠁧󠁢󠁥󠁮󠁧󠁿', '🇭🇷', '🇬🇭', '🇵🇦'] }
  ];

  const datesEl = document.querySelector('#dates');
  const fixturesEl = document.getElementById('fixtures');
  const stageFilterEl = document.getElementById('stage-filter');
  const groupsContainerEl = document.getElementById('groups-container');
  const tabBtnsEl = document.querySelectorAll('.tab-btn');
  const fixturesTabEl = document.getElementById('fixtures-tab');
  const groupsTabEl = document.getElementById('groups-tab');

  // Current filter state
  let currentStage = 'group';

  // Convert UTC to Bangladesh Time (12-hour format with AM/PM)
  function toBDTParts(iso) {
    const d = new Date(iso);
    
    // Get the 12-hour formatted time string
    const timeFormatter = new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Dhaka'
    });
    const timeString = timeFormatter.format(d);
    
    // Get the date parts
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'Asia/Dhaka'
    };
    const formatter = new Intl.DateTimeFormat('en-BD', options);
    const parts = formatter.formatToParts(d);
    const dateObj = {};
    parts.forEach(p => {
      dateObj[p.type] = p.value;
    });
    
    // Add the formatted time with AM/PM
    dateObj.timeWithPeriod = timeString;
    
    return dateObj;
  }

  function getBDDateKey(iso) {
    const d = new Date(iso);
    const dateStr = d.toLocaleDateString('en-CA', { timeZone: 'Asia/Dhaka' });
    return dateStr;
  }

  // Filter fixtures based on current stage
  function getFilteredFixtures() {
    if (currentStage === 'all') {
      return fixtures;
    } else if (currentStage === 'group') {
      return fixtures.filter(f => f.stage.startsWith('Group'));
    } else {
      return fixtures.filter(f => !f.stage.startsWith('Group'));
    }
  }

  // Group fixtures by date
  function buildDateMap() {
    const dateMap = new Map();
    const filtered = getFilteredFixtures();
    
    filtered.forEach(f => {
      const key = getBDDateKey(f.dateUTC);
      if (!dateMap.has(key)) dateMap.set(key, []);
      dateMap.get(key).push(f);
    });
    
    return dateMap;
  }

  // Render date buttons and matches
  function updateDisplay() {
    const dateMap = buildDateMap();
    datesEl.querySelector('#dates > div:last-child')?.remove();
    
    const datesContainer = document.createElement('div');
    datesContainer.className = 'dates-list';
    
    const keys = Array.from(dateMap.keys()).sort();
    keys.forEach((k, i) => {
      const btn = document.createElement('button');
      btn.className = 'date-btn';
      const sampleFixture = dateMap.get(k)[0];
      const parts = toBDTParts(sampleFixture.dateUTC);
      
      btn.innerHTML = `
        <span class="date-day">${parts.day} ${parts.month}</span>
        <span class="date-d">${parts.weekday}</span>
      `;
      btn.dataset.key = k;
      btn.addEventListener('click', () => selectDate(btn, dateMap));
      datesContainer.appendChild(btn);
      
      if (i === 0) {
        setTimeout(() => selectDate(btn, dateMap), 0);
      }
    });
    
    datesEl.appendChild(datesContainer);
  }

  function selectDate(btn, dateMap) {
    const buttons = datesEl.querySelectorAll('.date-btn');
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const key = btn.dataset.key;
    const matches = dateMap.get(key) || [];
    renderMatches(matches);
  }

  // Event listener for stage filter
  // Tab switching functionality
  function switchTab(tabName) {
    // Hide all tabs
    fixturesTabEl.classList.remove('active');
    groupsTabEl.classList.remove('active');
    
    // Remove active class from all buttons
    tabBtnsEl.forEach(btn => btn.classList.remove('active'));
    
    // Show selected tab
    if (tabName === 'fixtures') {
      fixturesTabEl.classList.add('active');
    } else if (tabName === 'groups') {
      groupsTabEl.classList.add('active');
      renderGroups();
    }
    
    // Mark button as active
    document.querySelector(`[data-tab="${tabName}"]`)?.classList.add('active');
  }

  // Render groups
  function renderGroups() {
    groupsContainerEl.innerHTML = '';
    
    groups.forEach(group => {
      const groupCard = document.createElement('div');
      groupCard.className = 'group-card';
      
      let teamsHTML = '';
      group.teams.forEach((team, idx) => {
        teamsHTML += `
          <div class="team-item">
            <span class="flag">${group.flags[idx]}</span>
            <span class="name">${team}</span>
          </div>
        `;
      });
      
      groupCard.innerHTML = `
        <div class="group-header">গ্রুপ ${group.name}</div>
        <div class="group-teams">${teamsHTML}</div>
      `;
      
      groupsContainerEl.appendChild(groupCard);
    });
  }

  // Add tab button event listeners
  tabBtnsEl.forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tab);
    });
  });

  // Event listener for stage filter
  stageFilterEl.addEventListener('change', (e) => {
    currentStage = e.target.value;
    updateDisplay();
  });

  // Initialize display on page load
  document.addEventListener('DOMContentLoaded', () => {
    updateDisplay();
  });

  // If DOM is already loaded (script runs after HTML parsing)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateDisplay);
  } else {
    updateDisplay();
  }

  function renderMatches(matches) {
    fixturesEl.innerHTML = '';
    if (matches.length === 0) {
      fixturesEl.innerHTML = '<div class="placeholder">কোনো ম্যাচ এই দিনে নেই</div>';
      return;
    }

    const list = document.createElement('div');
    list.className = 'match-list';
    
    matches.sort((a, b) => new Date(a.dateUTC) - new Date(b.dateUTC));
    
    matches.forEach((m, idx) => {
      const parts = toBDTParts(m.dateUTC);
      const card = document.createElement('div');
      card.className = 'match-card';
      card.style.animationDelay = (idx * 80) + 'ms';
      
      card.innerHTML = `
        <div class="match-left">
          <div class="team-flag">${m.flag1}</div>
          <div class="teams">
            <div class="team-name">${m.team1}</div>
            <div class="vs-text">vs</div>
            <div class="team-name">${m.team2}</div>
          </div>
          <div class="team-flag">${m.flag2}</div>
        </div>
        <div class="match-meta">
          <div class="stage">${m.stage}</div>
          <div class="time-info">
            <span class="date-time">⏰ ${parts.timeWithPeriod} বাংলাদেশ সময় (Asia/Dhaka)</span>
            <span class="date-time">${parts.day} ${parts.month.substring(0, 3)} ${parts.weekday}</span>
          </div>
        </div>
      `;
      
      list.appendChild(card);
    });
    
    fixturesEl.appendChild(list);
  }

  window.__fixtures = fixtures;
})();
