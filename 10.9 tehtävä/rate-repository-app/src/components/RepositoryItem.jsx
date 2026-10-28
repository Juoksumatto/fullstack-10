import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  fullName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    color: '#586069',
    marginBottom: 8,
  },
  language: {
    backgroundColor: '#0366d6',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    overflow: 'hidden',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    marginLeft: 4,
    color: '#586069',
  },
});

const formatCount = (count) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />

        <View style={styles.info}>
          <Text style={styles.fullName}>{item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statText}>{formatCount(item.stargazersCount)}</Text>
          <Text style={styles.statText}>Stars</Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.statText}>{formatCount(item.forksCount)}</Text>
          <Text style={styles.statText}>Forks</Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.statText}>{item.reviewCount}</Text>
          <Text style={styles.statText}>Reviews</Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.statText}>{item.ratingAverage}</Text>
          <Text style={styles.statText}>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;