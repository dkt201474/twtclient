import React, { CSSProperties } from 'react';

import { ReactComponent as Verified } from '../assets/verified.svg';
import { ReactComponent as Comment } from '../assets/comment.svg';
import { ReactComponent as Retweet } from '../assets/retweet.svg';
import { ReactComponent as Heart } from '../assets/heart.svg';
import { ReactComponent as Forward } from '../assets/forward.svg';
import { colors } from '../colors';
import { getRandomNumber, kFormatter } from '../utils';
import { Tweet as TweetType } from '../types';

type Type = { tweet: TweetType };

export default function Tweet({ tweet }: Type) {
  const { user } = tweet;

  // we generate generate random data here because
  // the Twitter api did not exposed comments_count and shared_count
  const commentsCount = getRandomNumber(4);
  const sharedCount = getRandomNumber(3);

  return (
    <div style={s.container}>
      <img src={user.profile_image_url} width={45} height={45} alt="profile" style={s.imgStyle} />

      <div style={s.rightContainer}>
        <div style={s.nameContainer}>
          <span style={s.nameTitle}>{user.name}</span>
          <Verified style={s.badge} />
          <span style={s.username}>@{user.screen_name}</span>
        </div>

        <p style={s.text}>{tweet.text}</p>

        <div style={s.interactionContainer}>
          <div style={s.interactionItemContainer}>
            <Comment style={s.interactionIcon} fill={colors.gray7} />
            <span style={s.interactionText}>{kFormatter(commentsCount)}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Retweet style={s.interactionIcon} fill={colors.gray7} />
            <span style={s.interactionText}>{kFormatter(tweet.retweet_count)}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Heart style={s.interactionIcon} fill={colors.gray7} />
            <span style={s.interactionText}>{kFormatter(tweet.favorite_count)}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Forward style={s.interactionIcon} fill={colors.gray7} />
            <span style={s.interactionText}>{kFormatter(sharedCount)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const s = {
  container: { display: 'flex' },
  imgStyle: { backgroundColor: colors.gray3, borderRadius: 30 },
  rightContainer: { marginLeft: 10 },
  nameContainer: { display: 'flex', alignItems: 'center' },
  nameTitle: { fontSize: 16, color: colors.gray10, fontWeight: 'bold' } as CSSProperties,
  badge: { width: 18, height: 18, marginLeft: 5 },
  username: { color: colors.gray8, fontSize: 14, marginLeft: 8 },
  text: { marginTop: 5, fontSize: 16, lineHeight: 1.3, color: colors.gray10 },
  interactionContainer: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 },
  interactionItemContainer: { display: 'flex', alignItems: 'center' },
  interactionIcon: { width: 15, height: 15 },
  interactionText: { marginLeft: 8, fontSize: 12, color: colors.gray7 },
};
