import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import User from './User';

@Entity('feedbacks')
export default class Feedback {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  points_improve: string;

  @Column()
  points_keep: string;

  @Column()
  suggestion: string;

  @Column()
  final_feedback: string;

  @Column()
  feedback_sender_id: number;

  @ManyToOne(() => User, user => user.feedback_senders)
  @JoinColumn({ name: 'feedback_sender_id' })
  feedback_sender: User;

  @Column()
  feedback_receiver_id: number;

  @ManyToOne(() => User, user => user.feedback_receivers)
  @JoinColumn({ name: 'feedback_receiver_id' })
  feedback_receiver: User;

  @Column('boolean', { default: false })
  viewed?: boolean;

  @Column('boolean', { default: false })
  edited?: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
