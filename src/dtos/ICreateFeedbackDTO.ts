export default interface ICreateFeedbackDTO {
  points_improve: string;
  points_keep: string;
  suggestion: string;
  final_feedback: string;
  feedback_sender_id: number;
  feedback_receiver_id: number;
}
