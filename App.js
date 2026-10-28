import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  useWindowDimensions,
} from "react-native";

const BIO =
  "Building cross-platform apps with React Native. I love clean layouts, accessible design and sharing what I learn with the community.";

const STATS = [
  { label: "Projects", value: "24" },
  { label: "Followers", value: "1.2k" },
  { label: "Following", value: "180" },
];

const SKILLS = ["React Native", "JavaScript", "UI Design", "Git", "Flexbox"];

const COLORS = {
  background: "#EEF1F6",
  card: "#FFFFFF",
  text: "#1B1F2A",
  muted: "#6B7280",
  primary: "#2F6FED",
  primaryLight: "#E6EEFF",
  border: "#E1E4EB",
  online: "#22C55E",
  shadow: "rgba(27, 31, 42, 0.12)",
};

function StatItem({ label, value, divider }) {
  return (
    <View style={[styles.stat, divider && styles.statDivider]}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function Tag({ label }) {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagLabel}>{label}</Text>
    </View>
  );
}

export default function App() {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.screen}>
      <View style={[styles.card, width > 600 && styles.wideCard]}>
        <Image
          source={require("./assets/banner.png")}
          style={styles.banner}
          resizeMode="cover"
          accessible={false}
        />
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.avatarWrap}>
              <Image
                source={require("./assets/avatar.png")}
                style={styles.avatar}
                accessibilityLabel="Alex Rivera's avatar"
              />
              <View style={styles.online} accessibilityLabel="Online" />
            </View>
            <View style={styles.identity}>
              <Text style={styles.name}>Alex Rivera</Text>
              <Text style={styles.role}>Mobile Developer</Text>
              <Text style={styles.location}>Lisbon, Portugal</Text>
            </View>
          </View>
          <Text style={styles.bio} numberOfLines={3}>
            {BIO}
          </Text>
          <View style={styles.stats}>
            {STATS.map((stat, index) => (
              <StatItem
                key={stat.label}
                label={stat.label}
                value={stat.value}
                divider={index > 0}
              />
            ))}
          </View>
          <View style={styles.skillsSection}>
            <Text style={styles.skillsTitle}>Skills</Text>
            <View style={styles.tags}>
              {SKILLS.map((skill) => (
                <Tag key={skill} label={skill} />
              ))}
            </View>
          </View>
          <View style={styles.actions}>
            <View style={[styles.button, styles.follow]}>
              <Text style={[styles.buttonLabel, styles.followLabel]}>
                Follow
              </Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonLabel}>Message</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  card: {
    width: "100%",
    backgroundColor: COLORS.card,
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.text,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.12,
        shadowRadius: 16,
      },
      android: { elevation: 6 },
      web: { boxShadow: "0 8px 24px " + COLORS.shadow },
    }),
  },
  wideCard: { maxWidth: 420 },
  banner: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  content: { padding: 20 },
  header: { flexDirection: "row", alignItems: "flex-start" },
  avatarWrap: { width: 96, height: 96, marginTop: -64 },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: COLORS.card,
  },
  online: {
    position: "absolute",
    right: 4,
    bottom: 4,
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 3,
    borderColor: COLORS.card,
    backgroundColor: COLORS.online,
  },
  identity: { flex: 1, marginLeft: 14 },
  name: { fontSize: 23, fontWeight: "700", color: COLORS.text },
  role: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.primary,
    marginTop: 4,
  },
  location: { fontSize: 14, color: COLORS.muted, marginTop: 3 },
  bio: {
    fontSize: 14,
    lineHeight: 21,
    color: COLORS.text,
    marginTop: 18,
    marginBottom: 20,
  },
  stats: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: 12,
  },
  stat: { flex: 1, alignItems: "center", justifyContent: "center" },
  statDivider: { borderLeftWidth: 1, borderLeftColor: COLORS.border },
  statValue: { fontSize: 22, fontWeight: "700", color: COLORS.text },
  statLabel: { fontSize: 12, color: COLORS.muted, marginTop: 4 },
  skillsSection: { marginTop: 18 },
  skillsTitle: {
    textTransform: "uppercase",
    letterSpacing: 1.5,
    fontSize: 11,
    fontWeight: "700",
    color: COLORS.muted,
    marginBottom: 10,
  },
  tags: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  tag: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  tagLabel: { fontSize: 12, fontWeight: "600", color: COLORS.primary },
  actions: { flexDirection: "row", gap: 12, marginTop: 20 },
  button: {
    flex: 1,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.primary,
    minHeight: 46,
    alignItems: "center",
    justifyContent: "center",
  },
  follow: { backgroundColor: COLORS.primary },
  buttonLabel: { fontSize: 16, fontWeight: "600", color: COLORS.primary },
  followLabel: { color: COLORS.card },
});
